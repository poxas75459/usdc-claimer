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
    "5MEnBAUgUV1HBj61G8NKU5insVdwdJrBh5DYihpYYdoFkxAj9cMRLohGsohugEkCRfS5FuZR8xsvogAqr42M8WuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehnP6A7Nu2cSDzoacSbXE4jg9XVabREaKrqRK6btoaBytohi4A7uRHsGfFp3hwTVVqTYyrJAgfKbwpurxwb6suF",
  "key1": "4TNRtXq6Y3PGo2AFmtScK9LeoEWiCuE2R2pm9dSQh9ViqGrKJJMsW6MiRgMEnY3TUCunGNkp8mswTCYHjcyp7uid",
  "key2": "4Gdsw53YRdBySkVcUMaBDSXFt2wUi4aJaF3y35UAESHtZmyGhq8xQzYKLbc7YYD3Vesme7UUjyyTsFnWX3oV3edk",
  "key3": "2pSb3jhapadK5j7pAmPyy8uYYHiFP8hFRGkx7s32ygL35UV13hzCipDHF1DuzNHdT2gqfe1Gof3KW2Gx2a7Byub8",
  "key4": "39La2djFFKzR1eLM3ckhtoBzeENnQBka7rDgR9FGN5j5mP9tX4GNVhFsZLQWWBjLeiiqLR7Rsr7AVycEyucyusrX",
  "key5": "2xvNoxHeZVNMMa3yJCSRheZ6ye6jpsoGrCBgf79dSnDaDwv9JwH4L6BgTXFoJQK1RUcR9ZSd1CikFuxVzriSdRor",
  "key6": "3X3xWrJerMA7Q3ZTgwzUCYGDYfj9xef8MRnto4gZwAbCv4TdU9S5w8xbQ6GBFdwbjWf4c3MNGn2bXiqJG8YtBHQj",
  "key7": "5yS9w6YMtWtmdFdxte5PpKhAC7uJHkFcza9Y9bpj82f6DRhpDuQkzXyhnq4G2ctmSbf5fFLu9j9wB7ojsad5F59U",
  "key8": "hsjiDZUmGQdH2BrY9HQfeQvSZohHBKukMpULzXMdFXFNvYDD117UEfYk1gjTrP6w498rFdBtYu3iaGDJ4D7grvx",
  "key9": "4bSyreGfqJckubLCbaK591eh4XkiXTbwhP3yCwx18VXKkPntyhhCzmwW7QreteREy8yh6EZbUzZ246hU31bsjHQw",
  "key10": "YGrKswADfbZjofMqWgWDxzWvVYVHWMHaG4TugPtvNgW7Wo3b13embgrJGPADnkfC9kp8tvpQEH72da7qrx1CQaj",
  "key11": "42Y7nUwjxMugRmpGi4mvZBYayx9ee634u1bcEBBRLStMdwWhoKx6GMAhcQZe6yRJJ983Mhqqtcf31CAmjWMJJgpD",
  "key12": "pJ81FECGQD9NYUcqJDN14qGMQxE2BAebzLajUUqiPuQJh8V9vUVFGWCsar8eL2HdeeQEEJbyHE7rv5SKZs2xQLb",
  "key13": "P6rRGJ88AXpe8d5FwJYyvAf3TgZShToVBw4Tn1i2LVGDaM96kCP4pdTJjxCUBbEncikZu1w2X2YdBRVjrN9RWnQ",
  "key14": "45FDRcr8jwBUG2Kc2X3MzyKx1WRuj6mNmd8pqVyhVavQX7A5DBFwyMb5CA3G9t7BkMKfpJqQRVczjSgmR7swfXMk",
  "key15": "SU3rqf9mtBUQZLcjh9BL3BAiwUA3oZaQHKma9SK2e99pcJPCMyRg9D2698srv6kkKDgnW42rVKVgeky3uZCpP3r",
  "key16": "2aenFXbJXkCDjqitPAwL1KXDGuUDDoYzNBDwCBhb82mHiWWsTHF8CCfvaiGq5Q6fF5BW1CaN9U97Ltu2B6sb3HPM",
  "key17": "v4RjLZ8NDfQxwtupLRw8A4FNyU91oDPUm7M75rBVQJUkt9NWkz5WPnMzrChkfQzW6SGS4KCG4qAGJtVFdXW6cSN",
  "key18": "3FPseLsyTANDRFubBeas7SJc4tn3dgUUDCGixiCGoYyf8xMDykRxEjQceR9ZFNiAMvFu4sk53yZjQ4zaLS1qoJXy",
  "key19": "4DE5uVMc1FcR8dcWuBHcfqsvCaSncq5LeSnopfRsQdfXeVb1Ai1g8rbUj8mckENiUy23TdFjSzSJbPRhKkgCZ5vV",
  "key20": "3MkUKPdoacRWBHNSBFYzjdZqh1DRET1fNDF38QmshZC7CEQtJmo9UQJkmCdDcHGbRD4WfXoACanqDXZgXZXKFNK2",
  "key21": "2hmsB8mUDnQSHsPmQE6Zc3aSci4AvYzXx3J1e5Jj1bfmBipLmgxrEp3wGW4ho4Qhxef9QKwx6WYz2QgHFCjkZU7R",
  "key22": "41rdZgkWoouvwqv8YHMxuzjLRM9UngW84sJsPbLR7t8P22xFozGa9oTr2DPENRgyFs83GJbFDdi92VAR4FhwaYp7",
  "key23": "3UpBDJT2TPDCprRP53Uvu3H8mViE6moUeqkcJrv1astWWXz47uP3vGCsYaJZ6SyfAMTLzFkeMS3MrMUkyrmeuhBK",
  "key24": "4mAb1LyrRFYdJpgxinvXbhehiHga3wej5xrbS18EcNMZ83ibeQDGYJb2rKVPGPdRhiyHjDFv2DtCMEBMugwBj4Uh",
  "key25": "2o34Mbbb5AFAsE5aiBp2bXeA1qXTpqyAtjjygUMpEsb5mnBBBaSHBEqa1xLbHBiAnmtA1KYixqcVPR7Z4W39Y6n8",
  "key26": "2Zont7csndTDfp2h1EU4Kftes3ZP6zmx4RgmNDAmLws1t3or5mzQL2cL5L7d74gto9YyzPnmwCKDviqMtU2G5Lo8",
  "key27": "4N84vQU1nN7g2tVhot85moCFCLoTtq8afef3EGRVwHN27yZVvdWwvi8psHuWEpJaEYsKZNSPTMT3A6Zp9TZgt3YK",
  "key28": "Na7dTmzECocb8bs4wU39qKiWnfycqE79x4tfhYsjhUfX7faDkkM8SKox8gefh8kWYFAyz9dyiEXkMxmLUoh25Uc",
  "key29": "TFtswdKQWQnVhbMpJAZWT7dCyMoWdwubYirrCrzuHxQ4AqAQS9Jr3uiVd2iA6DhKXWPW9UVcSNuD9QJPPdUCD9W",
  "key30": "57RNbddwg3WD9psL8vzDnbMGUZLArBKkLZZUH7d9KbbXunu6NXAWqDVSSc28qU18mvHcUQBG8sD6dUU8qiUGcwuV",
  "key31": "2FNWdmREcRTE6SwLfzCjx9EbDef8tCFgtzRCbDTyhHcHLN3FCXnWmjJxaQNj6PixwQKsEz4DS2xyD4TAf9bBKGSN",
  "key32": "BRgUDmh8U1GDVWFWsMwgTkJTfM6u43j6KthLDk2Pirou2iTrdSDxXK9g5PENxUaF1SXEwnrC6As6brxS28bAz6U",
  "key33": "3ku5PTWf8aWpss3MMoeMgw1vkHqEMxYsLSemciKLHSYjKmEcDBEPxvpE4FVWrG9NhbwDnGx9cyYidWn7R9o2kDEg",
  "key34": "Dcf7zJDxfXL3riqYheHfA1ZZir5nXDHGvCLG1t6epjqG7vWahqWDK4Asd758b6qhoyQbvcttMt7MohfQDCK1tPr",
  "key35": "42NrSJwRfeLrUiQdBFxH3ZwME7PGhqoz38kQdGm1REqC87R5NEVqasQ1q8ry6159Jgeg29in4yccpioSVroeYs31",
  "key36": "3hwUFEhCzYqnc434CfnwLkUUU656CoQ5snW5hk2AnVBeypoqn7ejE9Nfs6q4F7nJPPGUK6Gc5KqUVqPBPpn99Nw1",
  "key37": "4moUxGAAJPpd9BydqpHSTGL9sX45HToLM9V58YWqpCx1TpQNu1X5SdAifTChFwMrAFfuVPMcyNKQfeYQ5ayQBE6q",
  "key38": "5q1S4CWhCWPsCA2EepgPrsRFsh33USvoJoBzWQWLEM1HzevyvLuzu5XEbLH55YYKdSbUrNTb3vHvArris3aBgGCZ"
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
