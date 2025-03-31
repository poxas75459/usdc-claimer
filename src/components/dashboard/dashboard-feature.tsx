/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3hTBg8YiSvgDz3yAVkUN19BUZhRy1kMRVJeeBw73ZnTwVKynHrD3M4RdqbqFqs69H2v3W2M4pvnHLzpDfc8tpTxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udfrPXo3dGwMauCWbUxao3WyuC2pUGCDXriEpwAH48dJgUkW6YewQLnUBsaSinMLyTtTiJyRkrmx2buzAMQmoMZ",
  "key1": "5W5B4AGr23w3piAQptJ3atgUNR4zErgutkk216egBet6iSsU3wbDA364Jw1LckYjqUaaLAUNhqVecsRaq7iFsoPZ",
  "key2": "61xqbUC6FBfE2uiAMSknZMNtXGLPE1qy3tXJsvXX8PT5fNJMJAqy7URYh2cpkUT7bU1xeC4YQYVmBemXmC8BYULg",
  "key3": "33cFtyycaZbJYqvgxUKXj8JNinBXBot9rj2rkC51JwYwMdsLymgUhn12jMUAinmSVHnkTjxV93XGtyn5nUHmHzuf",
  "key4": "5KAv8sn3D7FFFSN3ZUf8qzQ5S7Jp5vTnv7dyKNfPovJAuVyjPnpGRohuruhD662rnrExzYFajn9GZGRsK9ARv8FG",
  "key5": "4ZBZxn4EhrBxpzG76gbCc2kvXBdszemp72Co9W278opUWZDUhDBJ8gUNAcaoMf152EnTo2dxdixoUfhcxZncsCbw",
  "key6": "4KjN9WRDThgy27nook9DmNoFDnUjqDDtizpoHdXkPGcZ23evYaMS814m9azJ6VmKdhwFA6n6uoW5QwdbcikN7nzr",
  "key7": "43gMB2FNmc3hMgM7c3arFDt6duqkKWzDbSoJes1jc3MHYCfjSBErijYaoCtppeZ43Mxij8zyB76nySCGS8RPYNev",
  "key8": "5R1R3d83U2yXv7pRTSoz8K76yTEmVqPSJ9oBcMT3ay73PWA3BFkFhsXsBDkZxKcpGMiZzj1qCqEc8NqyAtHoEqcj",
  "key9": "518JMx4A1vWWfDL9Nh4DXtAfAou59aMeMBEvVft5eUsY7S6sSAfduQxpsfag7NiewjswCso2Ki2F6ytVuVSfRQU4",
  "key10": "3rNdZYzFSmws1tFfKgYqoV4xpf3HiyTc2hQJft48Dr8P5EMYyq7tt4SFB8jJwSrfz6Y92n6LCBkn5BcphViP3KBF",
  "key11": "35grjDKQmyKcHnAMfTMM3VTZSTJu9Vz83x4LvAR7CPtoA4sm5DvTdxTC5vDv7ZaP2kAQbDKQu51YevEB9ZM5Lxbq",
  "key12": "22scWo3CaKdL8eN3FNK4p5U6hMb1QymLhQ5uZk4tCGLF5C5iFGrsg3oBXaV3sMyvxK7n3Wg5FnhBgePWtxH3odVx",
  "key13": "3zQYU4iiErDNnAUMX4LaeVeGNGFCXFjyezkWc1thZUkCkkAuvJ4pp72K5zGHdcDoPJBZNBzdH19YAfwM3i8i2Z2K",
  "key14": "byvHsFuStp3a7jwymPY8QLe4nksKrSuSkLWdLE8Zxh4q89RoDkB8bApL8MUTHbu5ha8atLRPtJHYGTzXzVdWuhD",
  "key15": "5SheBTT6daNWca8wyLMaVW12T4UTvu8cS3XDkoBbzvd9q6hbe4N5DqMXkMZ6boCKDxunzEQA7rnHj8ThR16Akgdw",
  "key16": "2mvTYNavzX1vfqD6jNLsYTJd4YLfiyYhozEqWk4MPCzKRdr2y3dRkdnernnPuDTVfwW7CGivXghLgkvLoWSWR3ps",
  "key17": "f9WKPmBcuf5hFVowWs4bFjnjKsoh1E5dm147ojc2hdd7fBZdf9NXbHuh8A2X21J47F6vdrMuGN3KFnZ8xBp3pfy",
  "key18": "8hoy2fWRqiaimWpANWi3tTZvitH3BL1eG1PLmoAEHbXc7cm9jciAndYQPGsyqnJELyhLRFhYCjzLZkDEF4vPpTQ",
  "key19": "3GNxMs4BubDxiiWmBhYvL2Su7wAxsDGgi29CoGssDFyY8szHB78q83gudzSnkg8E2GhMGVgUr5eDZcGNJBdZ8SgL",
  "key20": "sKTg9qP5YiTNrc9ucs55cfsPPrk4FexhkWxTiiHurm3ka8m5PfPoYASQMC63Mt9skRcHaAPmN7riRLSdX5ypPnF",
  "key21": "21VSZZ3gsqpX4n1tkU1GGwjCo66KF3j5jupYwUQhFbVzV7sbEoV64VUbJGATRiRRE6SLfwUgqsTUBoMXX5W6X8vx",
  "key22": "3F6hu5FBPMbMB7gDso8TbBbbVqFZj2X5XkQrnzgQzvjvt7PT9GqLPGhy7ymiEbXzoTf85DQRovE9GcNtrp9abcmE",
  "key23": "ja857DAQbGa49aNg1fBqTVXw9jdTteZM7F2WWucipKFuVdTh5hvKV1bhf9UopTyxP9ytyAdSFaeHciN6d38QWuq",
  "key24": "5oQYqxWvdvkqmsT8XuxGVPk38YQGfY5xviTD2SYqxsDjc36E9PvyavUDbUZychCip3LBK7UJQw8x6kqtPeM5jF37",
  "key25": "5XkFdaUn8ZhjriBidGEH76woDLSEh7HZzfG6HA2LXkXKZrijwVx8YP75zecFY9N9prfJh8iQxK8GCfBSQyDBRLjU",
  "key26": "4JyixqjdR596FXsgCCuaqDXFmyqD4fXaotHjVb9MryS4XeRM8D8FABHnT1EkSBctUH7vgnNGqbjBNpvidioFPf4h",
  "key27": "2j9znq1oSiM43iVTPSWxtLJpTuABUepUfpw16CzSmoJNWEjBaMJQPgAWP1pUqR7vyjrMF86UpP4AMwJqqQrvXLEn",
  "key28": "5JqzD6CRe3j8q7qJyRpNqE3KB7VPvoyfFnjCzQM3S1B6gn2sjuVZnEwPzmXk4k1GP5SnE8zu4aTAasttu222zct2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
