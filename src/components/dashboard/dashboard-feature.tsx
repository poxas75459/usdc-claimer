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
    "3oTmP6g9nKkzt5rpSWiXhKfZJ7sistomGUKdXeNeuddTDHUDbet57ZfxQJTneCkqFMtsNYfU3hbPxKW73BG99P8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmFti88kxNxWMgtmyW5xKwE3j58vgDx6bPNuGq5zVugVodcZAJ7z3sBx1y9Z62e5uik8U5YAbJhpTrQ9VyvWQQ4",
  "key1": "5Xi1rFj9FUqUzom1XbXUtEV8WpFUGNAfLmdcGRJLuJvscVBEKyZxQnwoeiv8puAyEA34uUZbEiKh9n9oXcGpRiNP",
  "key2": "4FrBPwpUijmTXvdW4uzC5Ggu958rDKRGDczULC9AX6rcs6i4jyJfaeT1KEc7ihMhaUTjXCPXBfCVzZ5zti6psTHt",
  "key3": "4W4DqyB92fyJqAbksinVUwwC4Vw4d8KSz9HjBvXEe1hRQT3tqa1rVWcwJZPyMCMcozR4EyDpBPx8MdsoWydeKRdu",
  "key4": "2AyYY3gSrhqP8tjgSMYQYUhcicMFYXBX2S93PKWnxjMbb5VXxTeZ87Shn4ACCSFffpspbr8yEmpPqf4F88uBkvHH",
  "key5": "5SRzMob9BQyfRmaCQpRbtKL7gipCEcSH6mwssbPB7b5w21Eq8PSQa4zS21ATB5fxy4PoSQeg15rbQe3Q68LjChXu",
  "key6": "4wjrmVCSeKqBBN3MWiLzcnLqjAhu8NPf71PtU6wvyDg1c78ZmaQSgvhqDswj87USqVa22dWnkmfoB6tWHPm6o8tg",
  "key7": "2aNHXQM56V9cE34zA9UMDdvbtByF9DbqHq7RkiLL8rr8CUHvgwAWExVzLeaPEUK6PYA5Gkeko7M28VGMuQPUKcJy",
  "key8": "4yYpSJcUxqfsi6NEWA6ASLQxTAWd1dUefLFdm67uYpcJxJk6678p9Nsr3eY8C9fWMRAcYk3jPdLsXtwypLAzZrDu",
  "key9": "CaCB1c6jhXuSW1sBTvibUJvj3ssMen5nDjQCQvQyfFFW2wYYk8qqjesiMfTRCNEbdqChEcJyxmpkCKd5qz8TzzE",
  "key10": "35KgQLSD7pAh9KqYLmNp65d19HehJbdxC7VzNVqpucV2yqb2Dt5YEs1qG5SKAtZ84TK7CyaV3R2KGQU9TkJVdzet",
  "key11": "2tM2k2k5kYBfVPqJVwtuBWJ2KrkYzecMoKiLmgyyvTRtmCrXAdjP2fsutH27AdFiP6DcfN8e1Xx4Cb22bqbKjnLU",
  "key12": "3HctotishkojahFVLnQsFhcTT9y155Rx2vsPEkZDzMPph11aYJ8wSYSTF7jm99mSW5RUJV7BWoxSacf7Q5dYM9Pg",
  "key13": "6JdrLqHKDggkWAkaHfFRYxqBkefNSkLw3Y4jq5UGaEGbqfUmYCvz4zANWg2PeRKs8cyySywqXPqFLwUJrFvae81",
  "key14": "4qaVk4kB6tL9y8gJFC5pZRjxLeMq9t3pAAW5gdtYZV2V5D3gZHsiZ4tYj115JRP1sgb5Qv3DUEo1UNq5Aooeqa8K",
  "key15": "41Fdnbcy8myuwVTLd6JXhdu5KJsRQtzPwFmD8kqXhin7e9e2ZGB9nxH1diveEo88UzHzrMxnpaSKswJseLEgRjy2",
  "key16": "GsjBdZKy9Z6cTTeEDoXBzXzG3mZZffyyfxQaM7c8ZL2CNKe1ZiXGKNWrAv1cSixykqcLN73XhVUrcisQrjPQYdZ",
  "key17": "2FN15PWfugpLDXQ8eYTYYs4gmWbtnYtNtWi9zhK5uANwEd48XjRgo46r4s8p7ohPjuxTz1oBp8Dpg74VwdyFZxZb",
  "key18": "5p6Pr5v3Bx7G7JGEJsnyF2AmH2Lgzzth9SepWcyVjn4obF7zkoZ4F4CSFpJLRbkbo7QB6n9AhRTEZtsbpXmwrg5J",
  "key19": "5bHwmkbLPNa4tKh1mCRGhwSptVtCwTe9siqjGc9g1k3khsyAzXTuG96pw3MGxjVeWA1w5KrCgtBoeRQ88Agm71wu",
  "key20": "1Hs1Fo4XDekpBpz3qjdNw9kC1MkxBJp2529yzxkr7R9woiSBk6Q8C7uGm2pWTAe6xr1XR5wFTwAhyZuQpAGwSGf",
  "key21": "4LqXoEFnqqK3Gq1nG8QHqnJqoos1TVSVV6aiD93TisouTerLU4kLSKAF36wRC1Uwnkgu6Y3ZvN2bJabzn7zp8t8f",
  "key22": "2nuEhYzCh8GNfuTFztQuGG2iipsSWBKbaz9jGHX338vBfcQJPEeB5iNxfBN1EKuBjYz61dXQ1L7Ca5tWdoiuTaCb",
  "key23": "WRTrmHHU9tiqtpkmF2Q9eMEKY8zEFdzrRVcQa6Bt9AgaPf3VFPQRJZ9Y461LduDN3qWNFbU3kDZUKuZFTd4PaQZ",
  "key24": "2CspYBo6hquCPdrG4e2T2GWEaBYyM4hYhESPqnf5nn7VmvsAropkpva9JHoJyHonq5quv8DoYVCXMWa5dukZPBKk",
  "key25": "3EosToafjdzVe7X7XZoD2D5Q27xxR6nxSPPGoMVm9b2ZNFJKTapyTViEkpsEx2ydHBWaKkLiPyNjRUXpUCNaVFQu",
  "key26": "2FN7b2BHPuYZevUSCXZCWwtXKadGwEa9RFxAxagzPqef9nJT72UcCQAWb4ZvvSGnSPkhbATSdFh392kpEAmcZi67",
  "key27": "Q4MbgcuacUX1J82j8F3uKN4eowYgH1ZVLsGCX4Ygx2CgKpQKiAFSL4A2oJFoEfxPh8d8pjmzZ9Bkqhb4kbXHTDq",
  "key28": "3hjRPxvoYpeTYqcz4JF9VEgmHYXwUd5329hEfm32SDj2t2tm6gC2BaEzhNTTRCzWNHD2xkZdtckenWNu5isQCXWs",
  "key29": "f9dEAsKJ1c2WEvfhrVTMPbgryhLeu1MENzt1eTsDPdfi1dr4Q2ehrMv32BkU7x5a2ywPAcwop6VJHP7w6kD45He",
  "key30": "361RcL9pSrwtpWYyGTiTUjDUczELRGhoBgcJy7g9wQ3vJWuxw4ks4sTiTdYYkfkGddsHW8ywP5LbyLn8urG1qsBt",
  "key31": "5R77uuU6LBd8z1QguJCANavNsMVpEf9PcV4TjFD4o4wAoQ5aBKV4Xk25oKCxinwksrnNYbnFxZiNdGyRfyBPPYD8",
  "key32": "4yrk1D6ABKvTmrMBbGJbM1D7AUxPi2CoNPtJx3rmWG6VDrrkgNXcQNUf48Pg5Ph8PWdAzec1qJZqC7id8kxMnWgC",
  "key33": "4n43MipFTeekt55dtns3GPWJBxHP2XsWdSSufPPyXgEBuegg2ZauH2ogbMV6C2u9A5WoypgkXprerzR43PokQy3T",
  "key34": "2EVLXodFSjPJGe5yXEF7sG1xXj8AudbZLvGG7nr9TGVvaXd3STfXMS1NWqz2u7RboX2jaZEaCTAs9tnngyagWpuV",
  "key35": "3QTf2CmE2s9XAuEdAScpG6zHcgy5fAdbeQqi4BJsiyN7aSCZudVnq4TsQ1hkrhvHMAMJiwK3Sb6GxsnUPApomfFa",
  "key36": "2uMNN6scfp5ZzMDAjLytt7D8riuDnipmxQs6K3SawH8SHKNZQktizqKSUL6DvfuyfcutW5sKtEvQWyPNQk3GiQ7L",
  "key37": "3LvoDS56vcrB1Q9Z1rfghGjpwMWGzMHFMeXMCmRb4ViwPSDfzR96bgb1ZmPTiAf33egJnPawZi8jFeLUkXxtntg4",
  "key38": "wghteEUDdqKLxhVsiHJ536dU3j1ZqPUayyBZPF93zbu3dL2oFqt9MwfvJh9PuNeksZMU5wqrMMN63CkGGTSXx6y",
  "key39": "3DxWxGirLxgtNgtiPgXQW9GZN1mwHbhsUfUWXvJLVy9sieTMvhu61C9rkChxUS6e3CMr6KECpQBgKfDqcaLkhUX9",
  "key40": "3jUx6RSFuYr8Pu54fe5scAqcybyJWWQAaCCvEqck7a2nGcV3tdJ9zc8TMUcrCmvUhXxmp6t87yeHCTTB1d8JMcMj",
  "key41": "3oJV6qdLjJ7nCxaWDwwNp54YK3dfwDHmmPeYUxH2rCEDcKp3J8e9RV76K3pWCtyxv58eMijN9mf38VgKWmshFerU",
  "key42": "cKUeGi6kLGNAer7YCQadtDR33q35pcNLgKCZnYE33myQndRsgAcKEcLoR7RmqSgyawjAFir1icjX4gX2a7rLGRA",
  "key43": "4uuW7sFiqUugP63CwFviGSGQD5pLBi4TSs4Bktdaf8SeZk13bXdGCP3nPzKi11FusQDSq5AjNWbNNwNFrXR1xn4d",
  "key44": "exa8BgZs74CCJ9zdQcQwdEDhw1kqj4HFpQAWaf31Gx6TGEgv56dmWstMLFhp1vPF3L6pdu6HLjsneMkX1FPDVad",
  "key45": "5iaiZ16W5u6BcthyQxTJqD5759jgXNrEQ6U7eKUPCK4W2RPacem6QjRmhK6mEVJq7L1UKegvG1qkACvvUMC62YQP",
  "key46": "4dMjHnRRFrGc8z1z44wNMwjxiuo1ZwN3Cz8eH9mdRBNqbyiecEvpBmFcLC9MBmN9DjK7MaRiL67hvBKFQv7jao26",
  "key47": "2YYM6He5YMhU4C8h2sW37DBRSScSCpmaquwQCwAUSxFbWKW6GSQpNKDCG7WRVRkwHQGXGfdU3Fawj9j7Y4FXfewG"
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
