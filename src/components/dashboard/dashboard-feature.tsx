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
    "5YMdWLHSchFDgRzDqKJDBfLTjU3LBCxUopN2un2hXwJqdkGtzQKCQJPrEF5nkLXnvQpf5BbRrHXHpajWrpQdXdX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wG16xrZtXMxXC7VF9n2N6JnVuiRJ5j7gDz2NgERhNry1Ui5eUE6ZFtMJWUKT82JobaGJiqewcLChkEGAwvYGsHL",
  "key1": "3WE8LzrY7V2SR7KEouyJKzUduHWjCRmsJayjMKbjKxX9ygD5raLhToQPgXhgTVkYFs2n8uqtNbcgyzYDR4DT6MLU",
  "key2": "x6eGJ75bgLxsHnnRURVSnYUjEGdyUEizxhbSXU6mB5oGdSqs8qcmuNdfMGAoYRUWE7FQ4U4PfBRhVUQ1FTBs5p4",
  "key3": "UPaJxc3ECWmY8THGnVMahfuSi2JdMcu3nkwxYWMAY6rWnDxmLTNwtUx6iyAdnTW3P6M43yEmLmnxSd2s8muJ8r2",
  "key4": "4V2RkCpjpQvd9APqtS2vVUni29D7rC5fF5nehaX8suByBQsysuVkxzsro8bSQTvCWVL7fyFnPkQvJnFxF5JPWHA6",
  "key5": "4dU6G3PF9PBLfhBzSTS8FyEg6jHEUWgTzGTd31ZHmjvwztqxkyBGrEguz7zKWtm6TwKabmhLprH1XNRJAi5nw6Rf",
  "key6": "3LBhnnKaECwE5Dsk3a17z6CiRYmYQ4GwCwU3f82dbE5C6RcTBwxJxrsqmaLqGr4K7UURQ96ct5q5M7CyhEkcn1xg",
  "key7": "2qtCNurjfd7phn1fBhCjw9msSTLwXBmiYRoqxowSV5XvyVvUer2G3dgtVzeGBq3vat8L47KT1bTBdq7HkhA392ao",
  "key8": "3Rt3D1snAjEhtsMK2UK7dW1vMP6zpc77JG2cdNpapYTCHWLzuS7jk5ef6BnTq7b1DTq571KexjwJNcHsPvyoWVaj",
  "key9": "3rZ4yD9r2BmTTDo5BpupYiV42WPCcDDWfbcm85bkh87k9n3VbsxvcE8kgJaukUcGQULKvGxNTkpkxdYAy8xo8qLo",
  "key10": "59UcnHaPKP88bz35fwwwyRqA1Uoxv4EnBdkAvEsD2h6BXC99yWETxZJmkUanhqTGJxGdxpj9F1qby553ThaFxhzF",
  "key11": "5CsFCoRZ8VkyXTXCPPUyRt7NQTAZhrDYGSM4i6ykbCJabgyvukagGB94VgTPAQ5f9R41EPbyp5pjYhkbsybTCpCr",
  "key12": "2VW1wEVS3JF9Gdth2iGva4pCdidyNeADdCQKVB4AtcLqLRtGEv2mfXJNFZJJoQaZh2Le4A9z44AQjxUi9PSd4ZdH",
  "key13": "3Exy4e4wr2RDLgV5gp94muGCj7DKex38VNoLizU3Rn7qZQrCaJJmf4v9GLzUopHfLYfsQ7TZ3hxWQb6bjbmT8FiW",
  "key14": "EWswitfaEkHbv3EsidNCAk2Wr1pCYMb9i2WMFgb9QFD7M3NY3ciz8Wo26FDT8eVMtLC9FsbJr7LGivHSX3HoUZR",
  "key15": "2UDuZeSQnxGJU3JgrEo76dDGyjH7WZ2GxPSG7iT4VAsrgwQzLyj27RrYjiASDJHCh11tj5p3q1mMoWLTo2nvN73w",
  "key16": "2BGzybtjMcwbyhXjENcno71vhGX4BYA7M91mYfjLdAW7QZiGtRjLveNx9V2EGiFTfH9bzvH4L4b9hmjL11mDUonG",
  "key17": "4xfqLnbLdYupQHuqRLr72kXUtd4DymCTYkVFx19WBxf76A9cuZTEErQi6BrkaVqnNictDCXwygwCH8LpKhdm385S",
  "key18": "5YkSb1GSMRHCDuUWeTeT9KSbeUMBjjbr18aAiZorM2kbP6tgyKt6iD3vyUsWynP9fpkXqFXehf6qeedgJiYhWJai",
  "key19": "29RtRQuRKoxfNPh2RKGMVpjPcif1ZqAkexxzFUY9zrzLbM6fm6nLxkwxE8JT4LojU9PSFp4CEbMhVkwPkqjB2iQR",
  "key20": "4JNvbY473WZshEDouoMvvLW2Ea6wApSfCBENFLBjFheDwFcV46kp31GqibJLBf3wvJ8hDZHa67vTVDSm8R6RqZkz",
  "key21": "43SHNrR5HHQC3ogjfFimHhKnwENmeQrdJKdDs4fVv8i9nfGRe5CGhhrzvXobqUiPG6KDaGk82vacd3R4drywSnxe",
  "key22": "YY9FZnjK43suisVWQDm74NhY7A1sDxkPJGmTVrbFdftge1AtbwHTFtWBch1wTKqYC8jekubsEHLk8ACFXqycbEQ",
  "key23": "3vHEuUiB1tk2ikjuzWrsphgkNJtyYV9P4bNMJgz1DBDq4TncFbq2MZK9Ns7Uic9i7Teq98qrfnuheL83ZMTnfXgR",
  "key24": "67Re3sa3eNDHyhqCiq7i3prrpA5umdd9CK94ukM37V7Xvkb1h7YX9dpdyLP5khSGrZMnjPLzAywR36bLkFAUa7N4",
  "key25": "2C3B8w9aHAKrNxnBBF3S3Yj5g97KGoGMRmxuuwvSdS8JXmLkBbruEEs1zvzWhNADHTNCbqNdU8XRMvTTNqibkc6J",
  "key26": "2qN2recWn158FHDwNkSqzBohDF1N4ypZdBGCJ5nuQ6cnRzxV3BtV3oKqD7wDLKMvj6EbRBLuBFWyKBowfdCfGM3B",
  "key27": "23sYTo4UVM9eBEwefCwuSVMfPFPYNa7KvtWi8xDV1hzykBWw4gr8FnJRV2WS7ZXJmiP2EkE2Gai9KfvoFCPe7q1z",
  "key28": "5pK5dL9DioEJgCCLfrcgLDHEr4R4vMkHbxBp3qANBuR8uqzKwNS7JJNYrWRtPb3iHbAmHR81eaDGa1kviqsyKDct",
  "key29": "2Qc3ARQ8WEXr8anzf1w5mxoSfUEtMXY9QXLiMrCQGyEwBYnLreh5eMDCDXAJxPMHRAZydr57tKK3G4fXuH4HQoJC",
  "key30": "4ud6NBSC4GNtRbNpLSTYBXURU2q3vnH3fJ3ZrPtxZeHzQXvNhrtLehtDs2PZqU9nySSHn2fzr3dkvqnBaf6WUvGX",
  "key31": "51EB69N7GXraAK3VRqWNqubJnQKgfumCNK3K8dAGnpjsyHk6cLdG6fpYU7YRSPh2GGXgEhJbLXUNMHGFv2748yeU",
  "key32": "24mfp4HUSq65KcPbf48jTZQERLVhvHfnjoLKL8mQtCdV1YZvjw7PW1MYDfm2sW2pvszVhE3km5qYNLG3UeBk6sRs",
  "key33": "3XTJVRojZg8nxKFVchZ3Ti93oNM2eedVnSvjM7uunRNhJ2riXqHY2zZWekpEUups2UeJZFNYbvrAXGL9iXKcd2ic",
  "key34": "7Ug2grFZo4kSDCefqzbMrPJV5HyvmSvKUCd8TKNV5YALhQCHKpJztau5kyaNXzGPHVQurBd5SkN8X7AsRAtJzt1",
  "key35": "aex5MMVkeamVZGqZBKW6RpvFtmQaMbkjqdFJNPQinz4Z79eLMurLuHUQmeiEZ2JT6py8oenLamcfV7m3NxyKi5H",
  "key36": "2MnQjLzGqv5hGfU9NZBvmG4WFUHMwCfpm5KoqrhE51CM8vqUBEheyKHw7wkJy5gk5MiFawR91JzPP5vyRGgi1tsw",
  "key37": "4nbCth1i3VvzUpZHgS6NiEVLmrwonVPoXXqt2fN4peCcYNoLnQRNyrryRP4aRzhXgwVojWunR4PE95ndSYefEJ3i",
  "key38": "46zJZ5iYRuq1cNtiwJoGiMNiMZ3p2kowam3cEkAmCXFynEZ3E878xmuhPVDyu6NpgsBN9hptjyaT4FxZY9jYQNtS",
  "key39": "5iRtWXxh7qJhRNAnPTfxisaX798qFZbw22Rq2fdFFaFWyXYPgo7CVv77EUF53kVfSaW5ugRygprAg7gVGXegwxrK",
  "key40": "41ooTWThjqzorsE2ruieD8KXRbsEbowSbT6WaP5kaFk66Ngay5keUhYJ63TkfKaX2JHkNUzZFGcxC33Bif9gPSQJ",
  "key41": "5VtgaNHkWKf94L84XKBixVcaiqg1mG9DE8tBevLRkvjo8R5r4YgWfYKFpYsVeBKNQBQhCLWoeboQHka1sjMbFDXA"
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
