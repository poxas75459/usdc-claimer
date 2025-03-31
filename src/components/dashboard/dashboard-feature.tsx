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
    "3Kh2xUe6zzRrpLAi1oFM5mi23DKezUjMqPKDDEXHKXSZMWKxvXREeRaqGuBC9tGtnCpicR17hJnpuwBeUMZZnBjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTZitbaDa1iznRpKpEQ6u3SCS9ppZZoWhM3fCU2pYvuTCabpkvHovEHAaaDaxXSXiW4dhuB6a8gCuMkDKedpqpP",
  "key1": "3rcKh7kUFVrPwM8RNHcMsANMheNHDRTdpNq5RkUYjsoK3B88pYyiT7uhPwrFRB6MeMFMcg6rhzzF2KHM3Xd4QqBX",
  "key2": "2RQSQFGz1rvzbBU2ywEFKNphw7EpR62ASCWZinSehWsTng6MaYty6AzUnmCxwJrFgPAHHiL5guHWkeg632QY5Qrz",
  "key3": "zRQquM8Ts5fa359nkiNuWBJkrdhvxBRmqCcN5PnCdHKE54V8khNnAn1pJhqJ6aFgkr28sVpCWMBCh1viQPiDVXE",
  "key4": "jLPgy7ScCuaxhPMjzFGQAiNJ1PVJmhsuyUtiW8PGd9nq6FsnRuxyaTEq1q8Xfdqx8C2CrcXkJT7Zj1t94kdUYiH",
  "key5": "avvQtpejDxe9E6e2KD2Z9n1bdVmX51phr7BeDtj3ZAKtkr8cpAULYtpybh6jxNVz5pC8MakeYWq2WWMzj7rQr1Q",
  "key6": "45WV5b3bbmL9Dm4meaDUq46vt6qY2fhmCeHweUuS2c8dyFze7aNoaDPm7UAzMjAK8Q6hrwc7XW7Q6r792SdeooN9",
  "key7": "2y6V21nZmaYDNSdceDSjAED8CjxXsF2S12kZfYbg6aF5eCxxW33DbkLwmmcUBQRh9jyN2ZsgVA1D6PFU7n3Ur5gR",
  "key8": "2P332cd6r99PLNjmG8UuHPkcW6dEMJBukygv5kC3t3tZJPSBqUZwf3NEvBP5QDRjxdo4CFPR7Vw6JVpvWyHu6mwv",
  "key9": "gubBWiJ2MKpr1xoayhomRW1jDb2NEnh8ohVHmcdJB3QnHXfu5FMdeMmtNCv8CR28DYXHMvKAtvTumSwj66pusnM",
  "key10": "5Enmmc3uHru8e91cyc3vx7LKBB4GjkYnKhAr9R9zh6EsBwFJiry9zumPLUTBEFV6XCtGbbJBvoqxKy6Bx4uAyRx1",
  "key11": "3KT9jKEALwcipaNv7jsN4TZoJJS8pUCauWztyqMBJKSYsv5WFjJHk5zN6PjeXMG3gamJ7gV9MKjQy92yB2a1HQAW",
  "key12": "38wVMpXye1dyvnK2mbfeYJXyXUe9Us1o9ZQpjD3Zsee9mFxXECfU2bU8Ftipei17HpfYSttPbjdmxzmGBg3nX79b",
  "key13": "21k8idrPWC3WjtP5qKTKaJMPdTBhfH6afEcsJ24cyr3wFYnLSLUUjShTz3tNRYPPbiNdmaFfWWZm2Qs4zgb3vheN",
  "key14": "66EKKt4RvrXR4Y2dz66oNLqnq1LQybn1BWUGD6tiZJCm1SoXnnZz7mf5We5uFB4eeSmLB4QVvw1RHJ5WbPGNuvSk",
  "key15": "44VVf3BqwE8WidfggAEpWYjfXEz9kkbAhVB2aNowWdh7Xh6WXLUupPY4sPQmjFzFWCoYWFdoA1mPrXCZjofYvJ1E",
  "key16": "4qoSAL3HgLSS6jahkb9fD2eLS1Svj1ixfNWJymudZHLVEy5sdEphmzAmve3vjwsupYGcRFchkKvf84TiNiXivxJR",
  "key17": "56s72Z14ukVwzWP15rfLZwn6DKKZCXmC4kPrNbweVvELPrtY3rPscNFHaRacRaD6UgAam1Cxaqkv5TpyTYEVwV1y",
  "key18": "dqhFxoFSu545Tb7QoUcE6P4byFQfMGTQvKW9PKc64hpAnL1yZmPGKCMSYrqA78RpESHANkZZmcL18wQmitMNw8F",
  "key19": "3dUQq33YxsxGDoAHtXzw4ZfgBgkCvpbjyz49YvY5vpuQZ9LgjA81aZHvzhHezWvyAVtzXvAyCEDJdiSmz8BhZr4r",
  "key20": "4cBqGg6VV8sUnkXhz7msaKKipt6dMZzqKjDnAYFRzag3saQ2PRkzUmUDzVW6RzuqSQpV9NTrETjQNbwwgU5V42b",
  "key21": "347NJgb5R7fC9CUEgTCMmRTp1XENxEEasw6djugYqsM9XiE5zjoTScuTqAxtnkpNtxWYVFqUS6ndoQviDhVo2vdg",
  "key22": "2r9ZEEXVVrKBspP4v76fwhTvWqtzpbFcwP8Tq7HkeivMocm6rd7Xr38KboxYSBQEAuAoN34vtyeZzd6q3F2YyDSG",
  "key23": "oQk4KVSUEJiigLKJ48fQm27iNqRnqEyKeQhBAHbxBZ5GJGidywZ2jcr6JP9zvxpbbEENwkDZB93XB1egbew86pE",
  "key24": "2XwSShxHPkNv2ZtPt9RFQxEv8PPbwBZLxC3HYvxso6nrhbDHWEuYaWAntsTe3DzNPBCHm3wDZaWSi1i6YiX1SmU4",
  "key25": "5NbsZjRMCVNarFtZRvG79ndTf8vo9onBYuhgmKR9yzSg34V6WxywkgHUtzTrGByfUD27Q69uGd1wY5gveezKexQd",
  "key26": "2HvmCWWCTufwdD7Vvyvau1NCUCdJhyz7uhsnqKUq8E4MhkFUCqQ4MzApnjpdQWrJfc5GiHXq9yBpeT87nEQ4ZBAL",
  "key27": "2KzwRptgbqvvtpWCCUzVk3wEMzcw462nZkDjZb6vScco6fRmAvhkrSH9vMcUVP7h7bAF7tJ947h2SewwohYQdj28",
  "key28": "42QavGoguDVPUDuv8w7saVdDVRL7P7A5kHhWMYefyfcRJszbcn1w27SbjFuwaSR6yWHVt3Zr6yGDGi7fECG8CcKF",
  "key29": "e1CULhJ3VRfzHPxK9qBnqzydCXFyWYyMD1MjRvCP3JXxdvmopmT9dbQ2hATACpy5Z6N8HafVwrBRjKdb1gkfHJB",
  "key30": "2xBx14VLwwb5LhGJktgQEK5HoUM3bshiibWZzLzEnCzUsmH8HbG7gdUyGfkevJEferYVvrRp1Qto98SrYV9LPvp5",
  "key31": "4yi1uW7cqZxgYkGb1zmkZX2xgxSA5omucfin31n2nkBmoeJtNF8S1qdUtC2hLKUYBzgfAtMkVbL2P6afu1RCfvEs",
  "key32": "3EzN6mt389bkMToJJqtpk4uW9Jpr3vsJtzRKwXR2PZwFhZMEy4wuHJhDVcEG6dJmk9UeLneLxR8Bbo5XbKdfjpGj",
  "key33": "2X2gzVuwcC5fHgG5xWTaTxAg15mkjHbeoCe67bvz9t98hAfbbBVPDSoDYLoSCNbuks4kqLmcdYttzuWsUE5KaHcV",
  "key34": "5EmVexzmdkcrMA11KGwbNM7UAp2RvLz7aGQnmeby6G6LuFQEqnYMEaXAHcpprvRV2aCcopGU9sb2FZ9p4EbxndAL",
  "key35": "yP9YVgJkpUDTE46zRDTqPDaaMJASsTeYoQP3GbUJCFw3GyzKczFV9z88Jn9MhtiPFF6BnXoYV32uLmtEM4rvXWH",
  "key36": "3CktP1S52MKGdChWurnVmpiLHVkriqwYZ5K2bdSYQeH581xA3wxhVcsucWwUTKtzEUJKRLgzfxLPgDPxQ9rtwCjx",
  "key37": "cVQoQ1gKhw7G4MCDuBJqDrqsxXzuxcGNvKNCPfCrzCKR77apA9DXYKxNny11tyrVse1U8hDbydLm68E8dEMaJ6F",
  "key38": "2igX1Nn8wrxpZirRZTBwvozJbDYS9KTz83gEQJmj18CrkUDiS789ntHFWzRuTBuaKCzneGfiVSaNypxBG1N4HtVM",
  "key39": "4bT6iKqmhscEhHcRnWmSf7HcxD1oiytvXpJUkse86WDCqrNSpr4VZ8qK8LJgWt7sVtTvqSc6SwYhRQY9NECxK89s",
  "key40": "56Jg4bwFQ4VU6pkwRnshfVaUQJpjupfknVzg3km13qmi8LojpkZEPVHH46EwqAfXBnhJkpYhNa4VXoztYC5dF1vE",
  "key41": "391gauHVYa1JHv4DZ54ZjineboJG4GuHMm8vCtVqhMuiUpJePTGurgiZGcmigwozS4BsDqznobEjLfRUxKFDXt8",
  "key42": "4MZr2XHLnJAGAnAC5vyXRKWjXNfHVqvZj4Mv88bDXHat4fgnACsEaSF9iqRfJknCZzsuYRQPWcGeBbZaHxBJUJFh",
  "key43": "3kPR2Nwoyor7a6mpDX366s4jEgRHEaLJyJ8KXAySqBnkEtG4HYeUYQL6T9y6ZbQw7y426SvLeWGsQNhcifNAqS47",
  "key44": "3yGGtZigS22CY8BpFJesw5gtu3Hg5cjmUYqBuV1YyYQ7EmXAN6TDrviDEWgEtFyr1AmNtQsF9UFiTwtnRLgtS66b",
  "key45": "3ygs151saojdP2R7To4NdPWHeK2ivVpMw3Wv3cW5Mm7auZu24L7VUTT5s4516a7gbpbazcpJJcpmffakYPeERvwi",
  "key46": "3Gij6QcyViYz12J2kaTyToGwjPwqvgVoCdUdbGPSNA9zSHcF538Cipp9RCqo37oSUydRnxfXLDg3iQPgeCKFbyg5",
  "key47": "5uj6sEx7x1R1qRXBwiY51BBUqJYiDrP7ayFWEKEyftoffdEXcVVNtzCmwSEaxSaYywvZGnkESmCkVc6kjHtK1DhV"
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
