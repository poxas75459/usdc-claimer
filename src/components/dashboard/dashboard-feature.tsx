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
    "5ZGir9wj8QBRh5rCygEoTA4DaAGeE1KgaFe6NpjKXBnz36yaThbCYBgg1vqqMyCLD4sHBVP8oM7Mwd36J4a2rrrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfWpJUL3cpL3BWF2MVeWsbZzzpJRJo68yMEm6yURoP2Y9eP97za6hqnvcgv5QHYxsd7g8PsmHcLJUcGLBJ8TDJc",
  "key1": "jvKhu6NpGLSNABm1AVsm2HjDTpfmbNwuCranp6CVvrmfPhGX9vprXYrf3BYS72JhaMC3qZv74GZDRFU556V2oGo",
  "key2": "39ryiYnXwpfJk3BQm2pwiYRcq5qZVU3736ag6HckpNivXuRqu84HYukVqCiW3pxLPJzbZyua6snto9ENbZX3Zpe8",
  "key3": "2GWHmtU6dQCnwQLFZ4WUz1NZJpPBu8uEeF811E7FNuyjzfnaUBEnGA2Xfwg6fjxynBuzrYifsnVMbQxkKgn5UEQ6",
  "key4": "2eDekLiPgP8Z51Dnwge98tbGLC4ujAhCoAgYL6H1ZLfivNZuJ7yKVc5nXCUmNSJiUZRP2vNnJBbHrCcAmu5xkGj7",
  "key5": "3y3WF3W6JCECreAttpxNxpsy1nWAUJCYwAmTAL55viTp5o1dcPoovGimiDS1L4HCD42YBi3gWvtbxjpkGqD5LJeN",
  "key6": "2Nj5wvawx6zj2ktGWuAEsgzLmf4hrTnW7UN34bELhVzTcWYpidvS9biznCqspf7SarwywLag6S8dLDVAGWnzriL8",
  "key7": "2KaCuSmiGcKrggk3dX9Nxwz8QsVQHSAni3H986ame4bnyZ77vFZwgf6Cpr3FfXc6LgVeQGpnrGPPY7d9vt2hpEsF",
  "key8": "2SzEkeYM9E8xB9aXh8aF7htQ3gJT5nDTWktufBwvmk9oProBVDb4uK7qSEedCK7mSS2Zr44Uhb6gx73Hrw4HjhGn",
  "key9": "cgYwFSpcJ7c1EJ7yYEyDrUuw4uuyqmkBDEgutR1jVnyRUhmfUvVqCrMmXQKmoGaDPj5opgkjF65NJtMLvjJnEDz",
  "key10": "24jmZVAxKvipDNLG8KeXHVPDmdTtPf5XbPQWDeJaEjD6Zav4fcmFH2UhNztezxKKVyW83tZBPNJu39jH1jVXs3sw",
  "key11": "3c7AzvLB5xcWLnXSkctTPMuN6L4JCkF4x8py3yQGice4uP4hU5JiaaWFMnKVbUukMsWZsVzR53C4UjzG2c73SpDW",
  "key12": "33WgpVtaJw4U23d7oLmD83F8879E5MrRUiGBaxBYA8DN8jSRpP5jaMN7NNfsSugckpVJw5VfpAvn4T5jG4hAT462",
  "key13": "3j1BLtUtwsohDyP3yaVQKf5SbRwqoihj5g13oDkdJFb4x8eRjgCZ1GgwXdSHCyKGQuaTq1Mx3KTC6J1vMr3dwFKr",
  "key14": "2oyTirsB3yjiLo37KufHmpBd6mp7NMNweVHxmu2av8q8TAGvE5rEhWPUviFWHjC2urxrbpKqPqbDXj4r3AxU83ig",
  "key15": "1n2kgbdnLiqWHbyAJ2zqZLB8qHaiwirP4T3KSD2eLhBA6TdCwDmssMbjFGH9WQAoswr4JsGjmxEZcWmgvKyxpwU",
  "key16": "4t3adUgPepp7PE3zsB2N3KsnzNAC7AsBMbFox7bAxTfTgy5LzFhAz4fr1rN95EfzGQaFBAUaswF99u36hvseyuyY",
  "key17": "4oiLd7piQ91LBxeSAV9DGGod6TuBcZK2rdLMeQSYVMYBuJQ99TMJ8BuRa9VNmsQ7iJVbKMV8k6qB9ACZVYMo3HTY",
  "key18": "5sF4WdbssrgajN2i2eYFGRxLxhRv1Hc4qUXbbTBKSrEYhsGdpC8r24aQV84szsrMdJ2cDpx5DGM8jhsDgg2YPfFm",
  "key19": "3uCicJ7bgffF4kupyC77Xgg6b7WzRUohwUH2YL6Tov5mP536dVNvhhgdXPbnzTj47S9WF98LrJ1V9eetdFJZCdBn",
  "key20": "39ureiKEJLdUhApYGHAREhtxs6jNs5Dm2oZTrz2A6tRSBMCwutxDoWcbxgTQpphipTaYvSN7dtQMEV5ZejoPC7jK",
  "key21": "5ASAsttGvY8oP5wLZBk8yijrxriQcpqfHZYpr9Zrr1E6paRegRAxV17W4GdGdwd8eQ4p7nbEDuytSksWnmhc6X2Q",
  "key22": "4D9Hqz56WLnxJuimB77ZYvdMVxjEYKFTMECsH1XPv3xvVftB5d41C5Z3CzAuusLqBRpjC7VYVpLU47zX6hKF2r5w",
  "key23": "3tQpj7Nk4Cki3a61N2skqb5NzN48ZdU6A8L74FfipsRX97wDEFZjg2G7dzuNxBv1VkMXGzdwvg1RdC8ei48W8KNE",
  "key24": "4u81gfD17iAgQvJqw9uvQtVbCPc97fJmtxCu1CkL9STtbbRnU9BGYcic6gMxeCEcgtnZiBLkEXLAPXSXrS8tDdcG",
  "key25": "54gY2bhXMjPkhJt3Bd8haXkq4BpukC9pDxmU1Kjmnfo72zg4YZDjG6dqTHiYREgDRveZ5zE7PqcQAZtGkMKneUxe",
  "key26": "5dMDe4w7iGaguwTpZS65fH6K1x15rbvqsUdnAfLGryLn4NKFMwHP5eK5xAAK82d7jcHPdA6JcyeKnJuhQ1dmuFj6",
  "key27": "2e3pkNrQ4ZMim8hqKy3C4xUY7Ljpj1ydRuEVJoLcfsgCQuwHJBZ2MFPksWqrYoD8ah5WBpHyS4TAXnYr9jLb6LLS",
  "key28": "4JsvoSrV2J5MC4MdhfMuGX2gTaxvw2eKRxVRqZHEdjBtpXpj2QaFnaDpKLMbochfVZmVeMj613rS39PQui3CqsKe",
  "key29": "wS8FfdhLEq1o357EdM5ownaBwb7petvZM8ygDmKDxynpm6V7fPD6AT2oFDQ1CkCbaWfStatFCMr4xXXm5ERheXh",
  "key30": "4qJXKTRzjjruSYX9CeGyB6sBAKnTxH5iH4zJMx1cvBRyZMhuSRjf1s1xSeaPFA46noT7ewBQgL3YmbBp9FpQGQMt",
  "key31": "4yMjtUMK3itFRXeTwkkacQhVVSCVp6hzA5MLU2qKZUzjDvkNr4pQmiks1H7FBocr9S7UgwpKiXKLzxozsShMp9qE",
  "key32": "5FrCvrDSZ4NAq1CQ3NP5ucTUtwb4VduJGAvwv7yT54YU7TaibfqgUEJHsgbBoq34KDLsR7WkFdyPCWuyHU9zR6pT",
  "key33": "3vh7qzAhFkyttBzvJVeguzCQtqTxoUVfKMD1oRCXy3Shc4F377byZZyiKP3dymqKhywjAxbyWrQxPeCytmYik6X7",
  "key34": "HBDjqgMs9EDiSUR4qgZ7Jf53gCkNLGmyphkKauoWbMFF1jZrGMBbZdPusQmFMy1uZ76ooQJEK3DCYsdheeUYmNW",
  "key35": "tEkZts1tYeRqwST8wWYv863k2H2vfN58poyYS4aMCvaBuLe7A1JbJzoeccBaZG69Qjr7EQGfDC2mrF6LyQKqbsV",
  "key36": "2Cna2ANjnLZMMLXqQJpPkbwjDzn51g7U2bKA1VH3YxQonEQTQarbUxScY3Do7RpkENASECHcqjUajjCoyiydjRky",
  "key37": "5wE5jvU4yw9HiXfpAhRBFx1dJbyRdpBUxjFAB9UKKRfKVHXMkQkenYYMBJDoSGFf5Hkv2Z7EV5WSF7kRoogyTLcv",
  "key38": "4dKkhXcRMA1Bn9Paz7ZHUzMoPG3DQ6ZZuxUfKVFoc2zWRaEMA587DDpRqSyc9yzZtKto1P4z2vEarha29j3Pssk6",
  "key39": "44uEp9mZFhQY2MjHXG82X7d3Ny69HCYT9Ts2kjcuxHkHoL58Cctp5WAe8tgcSLuphrUgEWCtVSfyPG7cqFLaitKD",
  "key40": "2PSMeF88FCTtpJ1zsNMrgFi2VomSmuo6ZNbxXqSn6bdyJnG8xQGe9G5ELqeoc829bQK5ovCjz51JcnXTQN98xsBx",
  "key41": "4TKePfjw5Vy6bFx9aWAe6KSZshN6tSJw6Ppj7dzUoE3G7HeYBxeWMwEbTeE9wdeD3Udqq7w9jXFmJfXnV4C4fyyi",
  "key42": "5Qrw5su1aay92KiRgkioG5E7W3bapPXuhHBnKfY65Fackwt4NgPcVFET8nD3D4NdiGjbzo4jftZLjpwQdQbcDuQH",
  "key43": "2Dxd9TBbxZsG2JtG151di2Chkb8Dt7dhhFxumt3HUoZ1MHSpDJ83jQhNXU6MahrhTE6ZFAjgK8Ps9mYMaehJbrEc"
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
