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
    "3tsmDQ55VNTuzHS61DzQh4r16gnQ6dmuMkTupJoG1aqkxZJTq4GypktiSEyqbdBeXURs6EVozZmPah2znGwnbWmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mmvx7C5kWWCpCnK21DYTRGEkzxFUSrBRzVSgm6hAECKXQ9QNNbEsLEPGvRkfx7SDVNuQdL49rTdWFMmkWSwhSX",
  "key1": "5taCHWpJ4ib4j4x2cgkhf57YDKvXS6TJqGggwe4WJZ8pntWvA1bT4DaBNSTty4zYBMp7fUYp6SE4hZEFKoZG82uz",
  "key2": "5RKaqZUf47nASUQKdX6xRAMU5Jew6Q9KDYWR6FAwfT6ZdZLSRb4vSSgmkqCCgz4zcYqrwzLG7vV1SH7BBvAJ52CH",
  "key3": "3ZNyqZZHdJgBG4uH7xDCQWYnam565WmMKuKdnUxW886YwpRkRaxtcA6W185ufojcQTyivfd6CYNwko9TkNViyf4f",
  "key4": "2aBeFKGHyNUUDxhomfHQ66gTHJ9cgVkpoAuwM1Ly7b28EpPdUSTM13dPiok95H9mstSXDiyxcC9HCJQcfSPwKfFK",
  "key5": "3Mv6pQ1BWXFxPeR62JawmD4XiHtUZeEwiaXukyCgRUeDQR6qGx9Tujuw5nvm1bF1i1Tmjr48BupfoeTjTr6UXeUt",
  "key6": "3cDdVHiHfFVqPAzzsjpkJ9C5G7pre26AbavCcYnAGZWenVZHxoYfR8hxcaos92EparTenpU2tg668HognqLnFBB9",
  "key7": "24AnGyKe8KN8gJmjbTxc6J6E7tAS7muCvuq2hdawhNBzBwuypfSmTzKNoFXWGyZaMk1zhVyShrHLMvhtXnhcEEfQ",
  "key8": "K7T7T7y1XZ7qSsbbPBspCETSVWoipMEfuxY2AeLSruvJ6VJATPhraaYExhB8rkrAERmmEfZbbuPEttiDqWsYkUU",
  "key9": "2Ns3taqTuKp2hmRVesrd9RPSC7SYk7Pr5eS8QAuvr1P6yXwWUkaM8YNHQ7EuEu2ArLxocFNYKuzGoSFGAaPCZqVw",
  "key10": "3ifGnTrYV4KXHd7gKaZLX8n7xKPmouzXzgPPMgRYQNPXp1AJBu6Mn62p61VyomRhBkZsYpHgCHcwRcRBzPBa4gGf",
  "key11": "3PSyYSTsyU2VNxRvnbEaMNBKqBJJ1tPHtQYnxGwBqLosnJrc3PjHZWNxdf3dBqNdLLuRu1tVf4s7osfs4tWYSb7F",
  "key12": "4XPREtyLqsZPDt1cmXq8zH5mtfzzZpaYzyN1nt43f9QqS4o2V4XRx7ikWfB5FvVH9CBsjDc8u9zq554oYxmAz5S2",
  "key13": "4omPkE6zU9RkAJPgbNiasEizVHEXMGnMWqY8XbeLdbf6BHqxNZBt3XdbS8WXcjrBtYKzHGb7W6ztkeNqXpfniwAT",
  "key14": "32wSNHbYRT9tKiffxrpjDK8ECm49kB2H469HXAFPxuhDxCipNgJLum7wLasr3dCs7xi6gZguGetJjRe94ymSJNVi",
  "key15": "4w6Jmqdzz3BJBNjiWbCuu2U9pjBZsB2v3sTAtqcx6RmFzkfoAdJLjKshEvFpNXMXxgXE34RkdfGZ7Tntc349NY6Q",
  "key16": "63dScFBYdQoj5fNcRVhBnU2VcrLXPCncsirXavTtjvYkU1L9mjyJwMWb1uPcj67F12L6RWHBBw9uq2TpPimG4jEq",
  "key17": "J78p4C2aHa7YiNCwqh9EEHd1dvwybx3i2be4i269gS7bzqaReHTAztQTH2oemivHMsfw3gUm47bM2sCq77pRBPc",
  "key18": "3No6rdkeCNM3ccE3siSW5NdqnnXEcE83iHiNvJms8kasMkPEZx3kMTa4qjfg1Ti5rQAXFbRfnDR9ftmvauzuDcQ",
  "key19": "4w1CfLabvj5u1TWBvwEWicxCk8Vdo1m7E6jufSSuH2rubHoeJR6M5FsyjEzXYcdVRNqDJj8C2ggs5aFP7GoH6c3Q",
  "key20": "3TqwhVeiUGC5SkJRU8D2gG6tmJ3AJpJsMWYSzxoWaMrmVm676wdaGj716Ao71pePruMBrWEYERDhuReYheEFUFcQ",
  "key21": "4FcmardmX5Y6nHQHXzucL1LkNPLr1CyTAWHwuo2jq5eJtScSoFM8UKCrLWaoe5FS3brDf1XJLvM27389xw93vVxY",
  "key22": "2qshnxRdSFESzqPc5uqjXQTrkCyyM3Y1MRnQzudoedBo9DQVmFHQSsAUUYMRUZAPVswJrzBfE6nNWWnA8je2Jc6q",
  "key23": "5KTVjEds7DDkwsjqBBSBrmX5yiyLSPDnMiyGrbghMieE8usCESM7YLpYH63ioCTNZTn34VdTHAgRrGf59eUWHyT9",
  "key24": "2hpFznkvW2tWj8A28v87Gy54G52P8whTz6wkmNCHJKhFZeHth7dGeDhJiPnPHnAJnNS7VfpK2e17XFzkit6Wos5V",
  "key25": "41JTPAZFvkpjL9Px9HHgQYfdh45GQj7jxbtjd9fdT1DTReQnVJzWdwwsPnEnuYWJZtSM1A6NDttbBNeZDogz24CG",
  "key26": "2Nr3aFmGjrcQjxM9sbXCVJS2RrbX2aZaDJnE97yvz51AeZ8ZsPCSNVD459evAbXPdPGWawCGWHqFRSL89UizhfA2",
  "key27": "4d4yk29SRE6fn2SFApFn9UMoqC19rFg8BQb9DRGzR7oW5NmzNXqMCZm6gMqK824Yunp2VJEFcVTLpEhjyqZs1TwP",
  "key28": "2eDRqy2soKuDvSFv7cA7k9Y9mWjmJJU8yjQ4D3RJMzKMY6cNHpNHDNBi8K5AutKKYMxeEnSM7VwP7DQ9teqrdepj",
  "key29": "5zKhSu7oLzN1pKZVcXrkgmtmFMEvWjEEQg2kQa2UPVbHAZToZ4ZKwDXEtjzsAFKJh69WFd479wXjEWapvPP82XR7",
  "key30": "4awgGPAPnyXRQKifhFRUmJPt8YzAgKtwvcFRD9BJm8iYw7emHGiEzqXjvhT8NfFe5WFAoHwrRnP2g7ESYayrPgcK",
  "key31": "HFqhC6gcWiPAL9n9PeQEEoGcft4vKiDSxfEHjpbvcXPv4wMF7XE5eeriB4G8uA7uvP5DJHe9Phu7vscqnsDHy68",
  "key32": "3YwYET9MJepeT9MMM3DZquBTkVYCnkTKcWN1yriYx57a7y6KBDLM6Ri3VMJuAv5MXwYMa7QLzbmDFDuE4y6TgwWg",
  "key33": "314nmKFU9Xuz7baih6xaJ8utZevMS8y6D2rwbTcCpoe8ULfD3iWt7uFR7URBATP1SDbMzBQG9J4smBxrVCQKMNMp",
  "key34": "h2KMRdW9GhLUMByjF72vws6Gvn8Lb1eVmFNQhesc9NJQKDC9uggeNLdvk4WVpJdATf2Ky5ud14KhcajKE8JfZT2",
  "key35": "28CGT2TS4fuwW8GFm8jTfZZgLPduLxPP1KtP3XJFT6VfNRe3qaVMZNQie6STMHTD3redrbMyByMay73Z6VEvxTCd",
  "key36": "5B5GXLPo2NkZFwQCLnfEAsjBbf8KLiiNq3d1UokVon4Afsp7rDTTL6Dfpqy6K4Ea3Ybp2YwyRrmeXiUF6btENGM2",
  "key37": "UWVyECYRQsLiZE5ZfQuGFCD7uakFb9mMg4RXz5iYGedWchKQ7SZZHbQ89WPbA1YY5g88zNrUz9W4pJtj1bDrmPB"
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
