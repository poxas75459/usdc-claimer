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
    "61ppuwWXshA1MCv4HCFdhxLy42JexzeQHHayeAhkqTR8EKeLwC79KmSRwN94VFRXa1UHbdid7yTqNGMG4mCRsoG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRFs5m914KR5ToLfrF72K43YTNswDefv1nG8CxehGJX1ZG93E8aPXQeVgiG57Ma3Gz84XeMPkcjAZcvXLfeHTuE",
  "key1": "3uGyQHNP3fX8C5SLjH4uDdueL3pBcYpv8CtSnji4Jv2HjRPc7KuYnyPUPPqMxUDAZNivX3yUzE1tEMnjxBCAJUhV",
  "key2": "4TQUiFJqecE7cMygqQJ2g1QLxU7gwUZ5saFMEUyW2Bnc6neGkomxCmiURsJ2XMqSvm8VduKZyXpX3uqXrg8pFF2g",
  "key3": "4RryqdJpCoQ9NeN6iTfgWitGz5nz2UM6gbjGj8DTVSjozTAbGV98iAY2rzurRbKFQrYvNAQW81h4v7bk4YtXX1pC",
  "key4": "3puiDAeBrSiHuGJ2RJuyXcQjMN1YD46ERjYZ9cekxmbLHTvx3tywHDtedPKbxv7Qmsy6UDyccNGYL7mpvecD8pSz",
  "key5": "3tkc4XFTYg1A6ZijiCXHLSusJVxy4gibXQuSEzbbGZxecMys1WnFGRnrh3y5TsYen6D9Aobss8UkZB8B3yWWvkEw",
  "key6": "5QFSQY4tqzrMMB5jaCL8RRki8TKwJANMzX5DHTgWAWTnE9CHS1NjcizYyvzfRpemprfYXufpiazvpBZjzWG2NvKk",
  "key7": "59UirnbybGHrgXKQNDA7BEvXSQvLQBjnSNT1J6FhcvZDgRWE2uWkUKPoPyWdCxohNH8Qw1ZJZWkjNXPiQjFqKu6X",
  "key8": "54PnkQqPymd829f7mjDj3BPiwmByY9ErpJtDRKAnGBG2ayGDJAArpUCScEhVdxHW5dxqwfvuskBz158CK8GQ3NwD",
  "key9": "2HVkRCiZvfewey95yZpRNqgHDDrRTaKM23TYg3p3MuSPHaksLDbiCuFq5mFAUsDwStgvqx8vBEgAcF1KYvrvsegq",
  "key10": "3hs2zdzqLi8yfWSQWKsBEomrnhuUMTkCSD3J5nQtZTKujh3M6ATzxLWxKVVKriV2Wow9EQAQuu3L9YvhQLjN4b31",
  "key11": "5TDjEpKHNXkQmZG9D743dE65ChptencqJDFimFJvZLQuQZnYNvYqXckvZ1pReGRobfjPQ96zpJyfVEJS2Urh5ytk",
  "key12": "4xKR1j7jajoatntrcc1nF6dGfPhwLnEZGxAYpXFffGQ9PHjrZCheF4qWnQVjzfdP4AUJWzjWXFmd1MKZTUeTQm6R",
  "key13": "aN8LmukzkAxEPLnXHfDv8LQcmUXFrF9LiqgnJnXkLFwJ8USTMSNvaa4K5u3E7PPsWYuypmjLfDFeDwr8SXUkFEL",
  "key14": "5RxKQDPXM93uSxz68MZg5o2dD1No83YMTMnmMuc869GPWFhQMs2warSniG65xcAuYx3a9odFubW8P1rsetbTAyHc",
  "key15": "5x5EwditFShegLkdLpPGG164DHNCmJGMNcYNgto2u8Q4n4keJmWmPrP1m6FrFxqN4xCAMy1LcVCfyo2mbXRhb1TT",
  "key16": "5EK2Un1gddq51yw2DAxrocEbtsCGeVwPFiCo4wamLq3VdYRRYegJv8SX69oDimqqZ6Bupy9t2uYsX5kmB4x1EBPp",
  "key17": "646AErGp8wqqMA16jw9LRcQK7oqFd9Er1RS8GubdYjyVcvR1rweqDju7vyz9HmyCHrp2cgGMyB72v6shE1gRMabc",
  "key18": "3qGJoSbXL1W7Q5wvrLYUTPDB3kQ7UjDHYXQ97K6USxaUYX3hcNeycAV3eMsrgckw2KEtpPUt9QYuaJAKBrnbuyik",
  "key19": "2mk4K4fhR94iZke22Ua6EkLMjjYoHQkUxQ7iDt168iSFKo33cwxF7zXdkELXsQAeTNbHWDSpJiSAQySx5e1fyjRF",
  "key20": "42buzU1ugHXMyPopBgqEEu7txmdZpnYLVDaBnR62Y3ZCUd59q9SMZoRvJvYJgVaYaJXxLxWuqtGhZLgXi6JnH2Wx",
  "key21": "2qsTHZMVM6TdzjDUQTSao2BJBoCciVC9oX3pApeYt3LvByg9ksnWYRShgxgRPu5GMQEHMyHvE1Y8BGwJtTUjcyXM",
  "key22": "2FNWS7KufQYx3Q5ziHaW76UQWMxWmsuwxJW7tKXhiSyLGysKrkcanDkEnAdDq2SBccyfwSeJSWPP4VJmnNtqGzTY",
  "key23": "4uR7XjSQdJfdcnfgQvN4xRJAtZqMgVnNLcqF8MpkK1vQL7oJmhc8RLHMTawECYCr3JCEDikbuXJXBrW9yGYNyk7k",
  "key24": "4bCoBU2aNez4dGqc6wp3HQLG2pQ59vwmYNRxSfDfDLqAxDKsYiEJThrBdwnPpDhADMY5eWFo3my1uDh1E9PK19Hh",
  "key25": "2rJGJ2GeV9To15WgfU8vibdMgfrK65Ns9wPefxSDpL5jMjSNdBjqYDaKDCeDXrtoYFvynvpbKQ8AqFXweYSFXiBP",
  "key26": "2BAJ4Bim4V2xqBpVKqarWTfTEtpkQi14FNi87XZ8kbBvvjYYBD5uM69uy79c2ocEqoY4x3HYM8KKnG2Nf5rYNcxy",
  "key27": "XagPs74v8QWWFUs2nusjpcWv9K91Xv9LHpEUZP18jDt1ocimiCReY8NvUzctX9Mo7Pv6wc1opjnKsfRU3YANPzL",
  "key28": "4BXqu61RBqEwQhDE2u9Edhpyx3JDq22zNSnhYx9umuSdaQhQw2XWqN7u3dX93pV5j3Yr5umM7nBzHESPHUQ8ejS5",
  "key29": "cxkiuWP6W4tKbDxyjAUzNzGTeRxikEnDNQUVY7VepNdrRtaTf3K9TBycvug3bNcB4VDVYQpPZkaypXAeR4MiJ1y",
  "key30": "28y1Tazmu2KtwcH9hMeRy7ckD62PZfKio1BEywc6yn6reU55Piry7fD9YsmkcDtiGYGquyCwPy7ys9NYcvBZyMYP",
  "key31": "2kidwrx4N7ErkjwatwHs4nGdJJpSCrm7GZePvRfmgYydsJUBEb7uQsyyufZMQqs8Uf2BRCp1Mh7pqdT4vTsHvz6E",
  "key32": "2GABuhM5DALXQGjigcrNDFUYatXjzy2NTU9hh5rH1sy7GkzQvzgFYA8git8bwSoKDtC4CVBDyDTiEf7QbYerLRZ3"
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
