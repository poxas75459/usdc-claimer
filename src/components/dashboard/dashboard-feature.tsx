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
    "2EpWUP2GcibnCZCQtbQXSatv8YP1kGRXJNvyB9q2fj8edBcWz3b4SPfsZBiAeytjHawG1afM5ckLA394CR8Tf1MJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YberRtMh7ft57zdEXPH7T9ysmvcDPUJgosaJRtvzKKmToycuAdB99F3GuF6Q6QUdwTchfoQBgW3rXtNDCdrWPA4",
  "key1": "5Ugris28umKZeHUnxosixvhUDwfczAV3nXZPhPeqpdvo8NbWr69vQujayZUnaQGXvGKvQ7jgtvMpca6RkPowKFca",
  "key2": "5QFT55iU6KZCwyn7fdT83dCmtaQjFKBi72fkNckneXDmC7aujtZPec1BgWobEkqvD9Kri9xErpkEpJHpt8w8Ujdy",
  "key3": "2VX4kKnKypJnKEfYqD1n5jbPikuRZEGVsYJxRh8tCJtQxttSWjhZW8rX1a27C933EAqXZnZ3sXr7zJkC11CgKwu1",
  "key4": "4wg4ZZqnLXsmkNKSMRcU3Xcg4aqBk2vtBpQ5ruqoTgEnCWtDDZhpBitJb3r2YBVHtCfkZcGJLyT9a9ebFFyXtpFi",
  "key5": "5mbsbMwyfdJ51vfzrkyymaf4Ux1GvA6RBYUMehWxu1TcPpvGnABtD3otSWoVHD7BVEdRpmNxCYFC8xPDzj1NHHjq",
  "key6": "62L5gVQoeN9ST5xv6jceGs7Le8jjm9V1PgRtHFfvdJQqf2xwZXucFfL1mxtvphZtXcJfHLUcyPgr6PRuWUik4aRB",
  "key7": "4vFNgfpHkFz2rjA6mBwftUqVfwuFhN6jHTMNDFJd7sjWN1hn6oyVg5E9yLz4ysd2DPprVCLJpq8CeP6Ss6yXPPyM",
  "key8": "579DATU9Kxpdh74jEgMVK327HRPetnX28fKB3AEJZSWtxiqHtRomw4PMGsBMKxAHX3r11qBfEBcz3axnsN8eLAi9",
  "key9": "4enccGgvE5w2CQxtM8NDpttHj2Q3p2cZRRxGHgK3jrfSco3nKEuu8NNrKANb35A9Rjabq32sBkfpCcCtDB8Ar5CW",
  "key10": "24Ygb8sCRJasWX77sYCYSePSFrb5HKsaxrM6z4vXf67bn1Ygk7DBreqSuosYAFZ8YnhsH89D8XBgi2dujYeWWbKg",
  "key11": "2apEgAzvX7sXisH7jxgx1W8AiQDv2fV7qLnj9JXz68TxHsGLCr7Jte7nKGNvt2pi9qKxwxT6obY9pp1C7mevMNet",
  "key12": "3GcS81NNwTMFLXgfmT6cKNKBvz93j368tPyD1prbXSc1mjhYy9iNjS5jce6G7dDHJtxAjs5AjxuTW5bQdxRbstwA",
  "key13": "5Axsov1qWXeNXWmV9hsJLhy7XdjSPrcKmgYutYya8fXFb2M8kpZYqR6c9KJbowEddUCqE5ph6Y3B1Bf6VnjjKoXE",
  "key14": "3X2jzyRaSmLzRJ7vdz65D4yfcdhB7fLmaGTxRvjoVirE4gRRxgXQeAc4GPbQyxdShzFTm4RafhLTZ6VYCqDQvw3h",
  "key15": "3aydjQPp3k2NWYhYRg8pW1NQEWsUYTnY3bYExg4ZUbcLP4iofzao66dnrpjgzhwJJYx8T3tYVBE9e9ajuadZ5r6b",
  "key16": "HHUa7KsG4kz8Cfbqs1QNzdYpstGknTTnyShSpCvYUJPVuPEQBZEAKsjKwvBJ6SjWyRR3pes3i4kBZX2qZth4xNV",
  "key17": "2jsd5JKjMcmsb4Fc56NdbK29gN7VoTrchn3po5qf7XjhFLy3PsSc6bX18bQrsBjtceG6Z8Da33rabAkhSvRi89Cp",
  "key18": "2r3khjzTc4ZNuB3tmeG9wbURHekaYWipnV78DTaA9e2XQKaPwjfusg39Am76BiPspFu2SukPWhtQiJGVZGe7i9Hf",
  "key19": "2ZnTVjsc2eQRhMCCLLdVXdN3sWnrXJM3cRE8FdZqhEbxftNrPqK25npp3pYqadccZ9GxYRKeAnm3YLDrBjeLuQGd",
  "key20": "126bqeTgRB8XHcLfbqDF9j9jMRm1NC9B1g6trRmBtm15vq61b9K9GeaBF269EvhznJJ9A9Tkh7dutZtg9FFUuzad",
  "key21": "4sJHohvq2oeLwJiHBFDTDWYksxGsBCkUVWu9xptMCxcJkv2VJK9TfsnrR41PBYemxrcRzJAQy56HSiN5DnF4qVbC",
  "key22": "2Jrky6DS4naeAhvegFNk32o9zfPLdkWBiSXpj4aByqyN59zVxsYybcL5xxRgbTFbSL8whbW95grWTCHCx8AiDgvt",
  "key23": "2rcRwJsce7mphXdGMUWDHKdKyu7oScS6zgncTYFmGBskNbqb2P3mwLHxGzusDWyQUbgP6k2UJFvxsd2p5FqCz4gf",
  "key24": "4ZCs2wwgWQE7gVKP1FVvjCz1B75QQxxmxASaFxPqL5FNvj1bxLgzQQzvxv4qH42j2ZaEJcEjMQjo86mo1AFui6XM",
  "key25": "4KW37CTgVZtLQgkxvAT9L7j429t8M6Tcv7RFtbmwoP4aQmTq5PKyaVGCiRnyUtU6B1My5mNgoc2uzcSe78LHs1ob",
  "key26": "nXHmCAxvUdot4JyuH3oBLssNWiJPoi5yNdbKivVm8ih4sE5EECUwFvf935ywaVZe3sG9QsWdFXWTGa6WmGkqpdb",
  "key27": "3vaiGiG6bz3AMg5d5NCE2zuoE9DcsLfVzC9re4kbRTPwDvZExZ4VYBCB4X3JsQ8zKQ1FVByZF4QXETxxu2rrqXeX",
  "key28": "vBRJyeRxgGNtP9PYos8w76muNPfyGyQKje7xau8JjTBWdAMKaFNsm97JRkobJGtwbTG7eL8TATeMdbg8mH5Av8F",
  "key29": "5yqBx5Gb4VJpHkrDF672imgjpa4hazhSHe4CjR3jydXToWxvWZnW7tMnd1eAeTN3aQ6KJ5MTFMKCoMYZvQ4Hab6x",
  "key30": "3eVR4qrhhfgBcpfmD1dVAFxBcjt57oVpppA5DMUCDomDHwLPzDkqW6tD5nwwEDxpRooRhdt7xi91pmbRFDE5cw4T",
  "key31": "HcJCEepkmi1xxs85jzXYQ1fzGBrj7nPh5RknFzLMyUtj7VDKPctGLo5e1mP35Qxg75FaxQZfZUkDTG3Q4NvKbGA",
  "key32": "418xaLfn9pUhMyue793gN9iGSvo9WfkKtbLhUgdcUYnen27AmzzuiVkPw6e1YW7CUutT9apJobW74SFqLSqfGW22",
  "key33": "3F4c57AnQsgbjcn8MZEf7hRfYULLJthP8FqbfRp2SSxV9MYU8WDCKPr7WK8zb2J4qwUjg3ApixNhTGGyq59SnLMb",
  "key34": "5mHAM9MZuMDmfvQjszQwp1aEPCb8su7iG2ApVm8Yot2yQDnrZc2iFfLuTF184icoqn3uqXF64gxxveX6BHtNYsCM",
  "key35": "3rUc6YKcJTdiGxTuG7rchoiy1jVePjfMjLeRjpQBAFBPiAwkDsC2Ec9tWNGSxKvpBGS8U2dpGFE4jzNt4tohKiPu",
  "key36": "5iUfNXmGwTd5WdxWqinJLphQm9w4FCrkeHwQrwt8f95NM6sSUQC9YWifrpGutpzbhhTXZsPtLgvQfa7WwkvwUnKR",
  "key37": "5LNEsVBbHHbC4krVXnm5qCDkXuahJL4d47GTvKydST43bEp4KikeYM6v2hFUvJxSHeTjnDqWqB8c2jn5VzPrJ7SJ"
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
