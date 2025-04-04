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
    "4vmN72pGGEGRUguAKPpHthnqPHKpy6VjcoPFRBx99R8smRHKWs8A742BzumCRkzgfdYi7AkoPFrKr1P6hfAu6pxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3amQTUAFTrrqHicy7qVaXByqPF36bQP3kyKZvmkaTiVYDLWk5sDf4te9fFavwgBA133Nrro5af3CaM7gT7zRd9",
  "key1": "2obWPz34dhAcs8J7wpyhvrAmyKYWwDzeEM5yYQcjpv3Axy9DHbjY8djRPiDTzzvbtGZhhip8JRo5qAFDCMwazJjU",
  "key2": "2fmceCX2c9E26TUh6CwAsnKxiyGbsA1kfr2THurhP2dtYHss3aAXfkcXn2EyGypt5dsW2u6BCrbedGdyu1V6nmqv",
  "key3": "2ZBDW3ftn3FwBYrwTMFZMSQrixR4N87EPidYBeqby5EK5JkyG29N4Y1aSrUD6JhjydUSTdHqccpGBCb2jhSce17Q",
  "key4": "2nKEW2yZXmp2pw8wqJmdDqjkN982HQNV4n3LaUqkCqkBakj7tsi8Gj55a1yWx2HAddLmXAeCx12uMHCRztPDvA6C",
  "key5": "2cUiiyCxnv7BshcAg5BnVACeBfsUMXboJKUbeWYkJmykPzk5MCn5LbhMCeQAYA4C13LxStthdaojjpsXxjmyTxwn",
  "key6": "3pZKVtJVCmuknieZRRHmLP2F8z5ZusFAhm3oU2dQhwb31TvmHxPufeuMYuqdy2vRZMuVs9d8iXdXvYLZbTvktseG",
  "key7": "4jHV7zgKDN592ikWX7xVQZ6ULyGF9iJ19DVw8eB5SqsRDd3x8XRuZLoKfFMJ6RkavtuowYCPcHvcMBqYmCsUeC3U",
  "key8": "2t7qezpEdNJZjRW6QUyJPtBQ73scnZ5kxKruoTx8HAdSbD8MfjabNvnXWrYyyA5w9SaY4zXvx7dJRskxsuAknteb",
  "key9": "ob16tuKLe2CwXs6VFefqeW56Fgfz85i6mTapvGagHptaeEPQRrXVRK9JoGxLpLzpvwyoVZJhCTcyu7BPj8rDDic",
  "key10": "2MmYiHX6q9GkaGfv38J9xQKyfvjd5FZBY2YMhTxvXXHhE2Derv1j1QWiYDjEQGtMN2sJfH4NcaeytYNXRcq7GMc7",
  "key11": "4fS8d8cQFUqWKZwS2hjBpkRasGESdxb2Gb1UytSHj2qsXYmcEaXicxFTBdGgB1Uuwrk8L9PCVv3f4pUVXr1WmFNc",
  "key12": "2uPFaDbDpdxxMMFqPXmV7azDcoddFxer155JnFtm89dxD8xtpJPrCFmZtbZ8CqKq6gjgV3yxNbCgKobH5EBSRWHC",
  "key13": "4U41HFxCUkCtuojkqzQQPczEMmB6v12RNon1d8LaiNLogNdwW8Fjmkrip9F71myVmPfoQ9mAeXts2sfTEj4Amnzr",
  "key14": "4GaRtd6p3jVef8j6uf8C7i8KVYbQwGrQKVhzLmWiVSi6qiA4YqGAKxTeN92pXzmdBECyNncSZ2rssvbsbnWHQPfC",
  "key15": "3uJYm9q4cF2bCceCSuK1FjAvx82JirGnFFSMWHGmqDGQpm2CEqMNhc1fKZaq75FjwXZKAA4Be6i8ZsJWju8oC65J",
  "key16": "4fhLr3AQDZo87ayRhDKunynjhTfRRw3QnnzV3hTWqESk7GkML3hpZYZTdq46WmqCvsUtVpDUWovP2rh9etX7S5c7",
  "key17": "4L21nhsvEHarAdxMkDX5w7g8Tzi4oMweoLXFicFccgybhs6qUJahyrUdCPjMNupvndv8tie2Wp1KHGgt4dY2KcZ4",
  "key18": "FPMdvgP8TqnWwGKhbNcmnXKpfCV7d7JUecL2gp1S3tbhBh9BgMUZia6H2a7jA1hN2yckTRVeJs9vHn1TnWZChi8",
  "key19": "56JZWZRJE1kcApHQq7GwXmLVSskLWLfgumCEm9s6SCGjs32Rvr2iW6NzBm9Tq1J7jHHexrctScggh3MjZc6wv2qZ",
  "key20": "4PFAnLxTwGgHbpLTgWpXhQpEQVEA6VB7gwRWqejfiwmXwPrnes4Vgrj5vwoXUZz7MTY49t86P4Ha5TqoTE1wAHAr",
  "key21": "4VX8VBQ24bDwxu2ADV6Zb7KRXHuVAuffKguxNoYgDBVGhDZCPGn9NvHpr6WHTxHBp1j9k9q8LrnaKUxD7eSM9UxQ",
  "key22": "26CTbaSF8KWe2kG5XXmt7WME9HRttpiJ2rx5Ew9f6gWHHoGsA4fqKbTcVAwobVdYh8DAsyGurzoPnSUpPQMR1Wec",
  "key23": "2P46hu5mM6QXjApfPP4wKqLLBnaNH1tARD6zNux18wrwmSE1tCGJmHH8p489amJqKQ8RPPcoC3XnLwr2JaTydhVT",
  "key24": "3Ey5kCduxfV19yTbhiA7xkTif22VBJUu3z3KczaVkas9tECmHddDCEriMc5XSnP4B7n4xbQ7fZ2kNQKcdsJQeu49",
  "key25": "2gVGrjnVeEj4mpU3kxmj3C8iSGmkUFCqp73ETMLoVNgPhGqn1ftSWx787BdorwpgBbP517RECJy2G2198NgJH92c",
  "key26": "3rRtj8ao5fuXA3MsLjrY6vcYBiBXGHvvbz36reaVTmcMA5k6ZeTRqwtwy5LfpK1v8mWYZBRVE6p55j8YNAYYPMtE",
  "key27": "5u89g8ZNwq5udgzZkzf5ZCsYQGEgrsx73NwaCnMr1wM1xX17YZ5Ddx3wUp278yP6DQznPuVBmg7w557MaHYqrynu",
  "key28": "3QPPQiLuSmBMHPUxcKhCKbigwt75H13P9NcUpSTo1yiGwWia1XSZYkeiRYEYKMGkTntKGVPrDcL5xcd6VxpwWj8r",
  "key29": "2eV67eY3iuDHcrM92nyDzdbXBYqEEjrJJQPcrv7TGjnxPkmx8cJByXTwHeUdQm1HSYHVzmGfGjKBJ9pvsgtbcFUp",
  "key30": "2UbSydkfsu5XNjNYLtrnWqjddkP4wU2NSvs2ccFerveGg9YbpWvuYFF7RnoX1u3wFMXaXJpwcqCeyYTeWuWhWT1A",
  "key31": "4Z2Asv9orWjVk7i9ti9FZt1gHus6u3NuFM4MEcEu4yGuXkH5Qk4g8wfdwPWo4b5f1cxiX7G3fSeKSEzVNLkSU378",
  "key32": "cPFKCV4rVyixtsnSd9DkGVpEy7e9qKra5UGPaHRsrxuQmejJcTYcGSojWE2p5whCSmk1rmchmGNYpm3VJdrgQqR",
  "key33": "47Z8TNnTQQcS38412FaopCnX3hNbfSdWbPzhepZapc36sQwkhxjHZbSVcbsFTUXnnSJBU6RcJAcuA4RcqtxMJqsb",
  "key34": "V1PJU9ba9QFx953RtJhTyX3rqwKxJAvQ1FQYuNa7XdAz2mQG1TQt97FgqrmSRNtZMtQHSRWwpuvmTcBLg5J3aCN",
  "key35": "4RQVC13h3idp9WmCExdpqaXEnyz7uKNZx8sxB5EEmgxL1aeX4xtVBHhSiEiGzFhnZwi9R8qkoSB4XkhZtyxzcvPY",
  "key36": "zWwMTaS7WWa92vAn6wNkrzWT4Y6qGhd3qFFD78sHtuy9ksTSXAS69mCBKX25JuMDk9vT54PvASwGUDuNvED3RQA",
  "key37": "3gvdeh3u2rk8Z8YDkfBFnakWthFVGobFea5oRDhM8BzjATWY7YWQTvELh6FEGC7KSViishtyUdu926rtzEKppQhX",
  "key38": "sasX6JoHu5yMNW25Yvs79RzRaRp8rt2nuvThRKp1BUGZh37uArP3fuxraGDjVYTUX3aG8wh2BkjHtsKB7iYKiz5",
  "key39": "uceYgknpdp6ceVD95C87FRGr6mEyDLo5T5q5GRRaWhjEefz2jnBwBZUxftoZTXvpcSAEk4xJsKgV7r86X3nmTqz",
  "key40": "4ASiJJgpwXbVuxAkaKBWBtDyUPmVnUGWVMWCTXgmWn1scGRzaKjRKH89QKn66YmVN1nfPXZ22wTKCDhzVWDzFjT7",
  "key41": "5uEBbkGAn1WPXWBEeG7cq6psfaQUPKaZB3tkZM4teHY6MzJsaZg3bdM1ZXvx49YinmGFJGdyvBEHLAgrUbrSXaad",
  "key42": "63RdoDMFobAGMjsvuqg3TA8FbThdVm3PMWeS848ftxeivLLbYvwDpfeCePE7Rk5XCx21XAF7mBaS5fA5Rz2gai9K",
  "key43": "2ScyrMALoaNMUeBLpkZqdqC1NXyMkUYpx4tuGumgJc5opAUr5FRd2xU6oqL1bTBJybDid2Bw7yynmaX7YurYoyCm",
  "key44": "4Rw1dYeor13rgPvekyY41RxHunt1TXCUnbwFRv1pdGNdETPePztYjntfgP1n9hED6whxxeUMMJ5VSGWAPL9GXeKD",
  "key45": "LLRMoVMJyoNkPiKjyt59FVs4HHusUXmP3sNRKnRWo1dUEiVvxm5wHPR7wvZqXH5CStS1uUHnesTUMxZDSJziEn6",
  "key46": "3B8bpMB5W1ZbzYEkdyyM8ASHyMgiu2aFrLTVACNGR2vNPkK2J8GMRLTxuW6jSTrPVMkh778yVm4Kmb2gbijkCZZP"
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
