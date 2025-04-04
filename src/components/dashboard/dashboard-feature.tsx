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
    "5QXaxDcYmwKRXCf24onbDU8har56ThxX2hzprR4bwjXhqxkpKhX2pHzgJS3vdgRBxGmTUmNGHW4TptDFTTBBr1EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29skNCavAJsDF4E8inAoZQY1LB98h7TXENGKZiGWqb4chi6vka6YHgxhDajjjdEoZFEymxsAPVRbk4eZaZMyPzxt",
  "key1": "4L13hHYbp8zRGgc2hsot36XMcUgGSYU1pEomksKafZoYWMmkJX2MDRC7UbkKtSvaiPhQTvoYyp41zg8JFbb9cfuc",
  "key2": "3JDrFXthctR7MxHraNzNAtxdRvHQ8JcuRV77Xk24ytQqBWZQ9LTsrqFz59FLFWCu8eL4hHu5L9ZnenuwEme1q7sx",
  "key3": "4KEreyewh36uiuy5g91Rez9DzkB6zKwG2dVEWu7iLHYgAYFgWbitjxrFN3BsjtHAcCehjCCpmBbG5eKAnaGun8mN",
  "key4": "35hwQyJv6wyFP798CYD51bw7TZLCqvizqgmnftdKLvqetFFBA2xHTWY4iyYo5Ckizb8zM6Y9F3ihFyfJ6evzeFVp",
  "key5": "3CsDSphu34rdvASk7BpiUpEGrYi67gn17WHAK3nr2SUMqPNYtsFeVV2ag7Y55RmcwDtduniT7sXbjL5CMFrvr9Cz",
  "key6": "5wZoFqq9JGGHb1Bkf3YTLhYV8GdsAmpWaA6mf9r6bux5P1kSHEDZrVK6XikqgoQxbuU83ZHzBGLzbFneRD8Ue54",
  "key7": "4jysU7q2jMPmoQqMw3gaiCCndGD8aDrJxu4t2duxDgff4G91yBtZSNaJfxUhELv39qhgpQeC5Ryu4MogVnVQPEfL",
  "key8": "2K2Jk9grkJWs3KY35XJrb6STNvMS6e199rip7FofKFDTH1mhgkCm55YUX6uuBQxXBdZeTYEuMFhVhRgxrZsyV6g6",
  "key9": "4s9kHt86cfhqmtjHAe3epWf2oYVXQ1Q8ELSxiFrZDdd8fH5cF6JtkcRAYdSFsbekJyfg8w3vEWDipzXZviUDbj2x",
  "key10": "5VbMXvkQoi1yRVx2Q4kBgZdg5xcBqyQB5Ao5HWx3K4dtdvkLDCKgN7ixVCqLN1qbtFek6GGSj69aYScN1AngV5Jy",
  "key11": "2kg4oPAVBVDunN6Mvpga49HHmXjvshJ2hWFMRHA7HSnxgSHLQ3LPDrbkPbMDYjHCEVBo545Bim6FV5vJZSikKwqd",
  "key12": "5JTCGHQdwzoqCs92JYXiZFZS2Xht9xVQF1BkZaedNbKigsxMYybsaBr3mp91Kw3M6mp14TgT9EPPtS91vnqnGgr5",
  "key13": "4FSSDK5AZdJxocL7VR489rY6ga5KUXz6vTVuQ6Bm53TRgQx3EgYbU2rAfVaa246HijjEShCELXvucm9fZrgVdUAQ",
  "key14": "37BywMuLDpgs5Ljj59nxaUEb6k4BSh3dd8T8JzFHyxbVtiZGmoRmaRbzb8kVgrmkxKUDrNdTe6G5SYNRY9XksF4d",
  "key15": "4LLzPBtgZnF8kZQH7asZ7PGACxDumn9Uxt87FToTk7iz9P5eNviq2MLNUEsUXVDZE61Ju9dYo9NjEkBekt5pMiPr",
  "key16": "2qv9BAKpx7muB18Mh2T8jPFdAvN7bC1YC8R19RMnqUFvSfaLmGrnwTmSuLhSeubpjCKHUtgSZcQUJ6YspQCgTNf3",
  "key17": "RAbnoZKMndfZfeEn86mX7pCTicQoJASqsFVzujqaTt6o8cVvtbhkHL9mXT36g2YjHX4sue9wz9b2AKiaN3JCUjg",
  "key18": "5CNyWxd2picmH2P2fqdwLa8S3eEGq4rELwd3zxHUGLL4AfrN7tNPNX49ZSdiUY2qnF3RyeJVnLeTxoT2T2Yviu16",
  "key19": "aSp79Jwt4aswosS9hbN8r8koLL5Cd8Ugww5yKtRdM28UBtXRSGmyideGAVNySWx1EC2sgrrcuooe7md8vsE2GFL",
  "key20": "287hXp3kFMJVpHBFu9eNTDTrpPky2hxzaXpX6FYdwaCwg77jmmrqszwQGZgwUsxbZ4NGQ6JG1sE5ipNK7w5kQxz9",
  "key21": "5u6FgtzArHgW7QkNygosLJ8zncXt4bX3MSdYseDZP63ndCBwn5ybQ1ihV4cGJ2Uim3fvzeFwxncrWqo4EUEL4s5j",
  "key22": "5tdEgeGdQDAiHzUiFjb7uHvcqsKDByADCAB1RUbB1JPAyqHPEde7BTKwZ7M1NCcMHpsyjVGnjtY9MVUHjLWGLFSk",
  "key23": "36pKXtr6J9Q8wY1HMV62i3gSsQ3RnJ3GeWAsWUeg9fHpXc8tEuRB7cqa6EazrLxvgfpq6HhkLGm4YAC4m2aFR1AF",
  "key24": "5ifZpvybewDvGrTADhwFDDhiNfjzMEAxQgyF9r8ngeA6LacgCb3JVhrosi4qRQrSWx7WtoFkKdjtoS86oNanpwd2",
  "key25": "4QfJynw3Vm7aShRG3TomupeuwMoAFaGKxbVUX9W2TtWWj67WuTM8QHr5zwPRXsdm2g66LS5AMYAx149sQqJ3yvCk",
  "key26": "4mKpHa3Ms6FDh1cWGKzRLDNV6K2tLYu4ExfdAMQzmKym1drE4iDtRqeNKbsJFzdf1zsrj1gH2mKq6NuRH7igypop",
  "key27": "3uqFkywgbdMuj4siq4cgcCkKmBxhoZW5D9pZTeyCtLs66W4DMk45dhm382sHN98qAcpy3Cf9H8YCiuCQ5Fjd5NRn",
  "key28": "4g4JSBh8nXi5BbTbNzjMTqdXC6mkBiFYNQACsoj9aUp6ShsDahjGFg155rVW5fnjW4zDpqcrnvjtNrau2rqXUT9w",
  "key29": "5qEvZeXbtmtpZqFSpd2bTPnx7i7TFQyAyWx4UguFo7aTp5WsRGUpKkWjLirNFtLHmvAnxX8un6XNUcsL4YVxT861",
  "key30": "2wnYLAtKSCB8XXk2jxuHFojCQFqdieXZFSMk8muAnKCwU7YXexVYabbMAnx68qv1E69zhHAFuz6Jaq9qmixLyZBk",
  "key31": "5pmKsqaev8s8xtXM1wzqDnac1nV9RUYP6TRvtG4RP5Ha5tmX2cv6pHF4ABBd2hoZDMCJFWMfpXvNevKWqyYhRoQw",
  "key32": "2dTEbAbcGX8HG5wMFMhCsjBer8Sh4G74LgWgWt1QaDayGt86mSoLCE9RBHfHLJh1WVtBHjxZgqoU1ybJ7Cgsz1BX",
  "key33": "2t8zXSr5TPwJTFKYSBc3sdLa2b2nJJnsdZt5prg2EgN71vSB46PbhvVpoSDcm5ELWU35mpYYBPmHsyEqfXE2zk3Q",
  "key34": "2xhzbi5Xzb7sWfo1bXL6dgFvBnoKxWDG9pbjqeuDdhZQ8A9vmvusLt7KSLaxCxB7YFBvCbhh623Y4NB4rLbkSamj",
  "key35": "3JK2mDx6szQgz6MJdfAnEBFwSMg9R3oAchCLGQZGor3jxc4XKGnmUUbMYDYdZ5tP4tjSfan9JTfn79FoXgLC8ebZ",
  "key36": "326XKfj4GjeDK7MRNm8t8xaqP8sBb3uz89kV5eFD75yo9Ft2d2JR1oVmpdZX38Xr4sWok8tQYsYmNca6xXuGzfMw",
  "key37": "2JD62cqMLcUGBVa6SjCt4inF6hg9FwjCt1hY6Y5hh6dcHNxpZFSUPZ6zS2CfNgsqKVV3i8Ec163ZMFiMgy2wEzhn",
  "key38": "4RBx8QipM1XbXb48CK7o7eSAbMAgDPpke4bfqb9wCjxHf67yo32JKjAgn4cGER2nXJJ7BnBrUdKig7YBMXhTyD1b",
  "key39": "53Y9AVuttf8eNQ6yKHwF8aRqBN4BFRfSDzf65taUUt4hoVjUyyWBXdEgrQTguwzuUTCxAcoWswLhgaUjTfcp2L2B",
  "key40": "noWYGJf1Ep4fjwBgTCrxJN6GPnn6EqjutYUfC9pZJkDuK7shwjVXFSpjez2yjvmSV6hoHaMqHhmKyobhcnQSMKL"
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
