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
    "MV92PxQgDypFtwG3vGUbcWaH6TxZF7FGQD2ZYSaZNKxugyMurZQmZVnuuGFQa8NbY9TP1Lsy13MV132KHbwQEfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343bzFdLRGE2MBJJnW93RrwryYRzkgY8JiMtnSTCc14fN8aHF2KAUvkP2VsotnTz9kDjfLfXM3ofpXUfsAr76FE1",
  "key1": "2pkBwoZ2AU18SpPhHGueQzhVtFvH6a1g6LdFTEuBZ8brmfTHfXUjb2nuZSLHE41JdaX1NaPchJsHz3e85BGYZbdo",
  "key2": "5p4CTPfsxqFfGi7MM2ZNb2RfNVB2R1TXMMSQVeBpUNqZQQRrJ8Xx6KSKtWi6jzBbgdtVVMLmf5gnrjpGVCADZvo4",
  "key3": "A6ht7deZs7pA8ogD1sSCYn1tQxY4vAUkgUG42C2aGug4crUeQqxTDgxiGyELLiVmNFabZDLKVDfcbUYKDEfFEL8",
  "key4": "49ADVpiQNg4wi5ZCb2mwoRj57VDfLjxHt2ZNkBZDYWjQwoE1D2ACW5xU52CFvTbspyQjXMi8yKAaQ3ahRpMxcyY3",
  "key5": "4nZNKAZX966HL55Y52zySHiBvWqsniXo9wxr5S3NmqCZ54tdxa6t3YPKBNmyA3wYHLwvyvWesDbVnnfJWiDLvGkg",
  "key6": "3CanQXUKGFSUx8XRUhmMKo3K6wRNTKn1tuABCmJ3WtWfSb1ULePZbRhUKNWJ4fCVVVNErnFaU9J8R5S4svJypuM4",
  "key7": "4sXEhZ2dNFApyxH3kNbnH3Y5G8HarqTUpHH2nBqtWv8jg7jGHeUf9wsD6PvTmqKKCbrYr7Y5Ldar5uAH1std1Y9p",
  "key8": "4e3G62Xw9BkQKU5ax3TkTSSheCEQRf7qpb5BkGKpEi9q3T1zRjkjFyJ1CQnwf8inNBiTFHjHQp1oMH6gTx3mnd2C",
  "key9": "5zHcBFTHzHibyZcMQfrEiRMvhHphaJDb3ed7ho2F4yXuyvW8FNtxRcXDJy8jSY1bmvm24bA1mtJy7tE3k6Ndb8sG",
  "key10": "XRgnqhZsdD3kMUYFVbzmtNihx1Kz6PpX1rop5JNBPUiCUPvD2GWzRoV9hZUZ6Ypet7EmnA8GCK4fm9hnaVS4oiC",
  "key11": "4x9k3RjrUDoVgeGT4zZzFoX6oDoRRnCBeLTkisubprMvQZWHPUDmaUVKnovSqsQ3ZGiEPontYs8crz1nhcoQVbs3",
  "key12": "3iDDG8TsCXih7YQ8TuMNws6aTgHmCeDex7wsBLuBVewdzeyjXwNZSwEUb2oPkbA2hSeUqgbyfRGH3LbA35MDm4Jd",
  "key13": "67VEGLmdYi2dyj4obLLG33YLovhAgYd4v68WChq7qswRWx4GTrZ3r9TyhUee4TJxB91Ri7rnnKDX4ZoVHVt29FgR",
  "key14": "53fdtNFrNFEV9N5EZyZCa3J5NHKK7zeFP8h9G2gPHNcXe623CJJiR9cyvxVb75qQtomSJrMeFPdYbhhFyt3n16St",
  "key15": "ZqhiTT8oABrJBwGY5nHmsLyBXANhMz3FQEQLvEg2QSQxUdshTaK9NeeMrxfj6qsBdFZYb4SYQUCkHHTXBYR6jR4",
  "key16": "57v12xyJsVxgEqLhS5G1kWg29DLWkhmRoe3VdXwMqHzzd5QQ1CVJDBENy81mTYsrRLgcEowWH7VPS1tmbfwRVSbk",
  "key17": "4uzwdiGefKUGDaYPYJzTSzsMvcCTuFdMuXxtYSSDYExTPaMdpQDMoJNs48hBZ52p8EGkVEV6QNS3nuegUT6sco77",
  "key18": "vGcWh1xgAFZVAendn8thKGFjLBdi6d94mKAh9U16TwcHwhTT9jqTE2BxA45HpPbLmgiULv3vTmG5qCHU8NMzc2h",
  "key19": "51yPUSRKJqiZ4fTLMoqXGC86NP2gxfn5n9gk1zkue36PMtFqMs1xZjy9KjGhqjUKVH49WxEyMwjEdhedvUywENL4",
  "key20": "64DtBNHmUzKQZuXaMjFPAPeErJqzqApRHb517eJKJsERghF9Vx9Hq1fStrtWuWptuN9jAW8L1jKHzBLFdxVPka6e",
  "key21": "5r8keZPbYi23MniBog6yECV11bW9A3Mx8vpVCPvcY53eFie3ut3pt977k3wbSKoC8JN1VvgTkidk6CAwcDMN3cuz",
  "key22": "2LYcCE9x1gNrPSARhotKuAhcNutXEgZCTynAjEaPKDL2Hkwgkod9UqMwDSyDAGeDfco1Da1uZhnEkicfZXgcvyRP",
  "key23": "3D7Ev38veH9qfQTHygcWjhVQaXqNBTWCFNsz1S8j1Xt4MvG4ATm8YbYB7WML421xJ6kP9Q51PCBNL9qXcSEXNzHY",
  "key24": "dwquDvyM7a7krzNYW2vUg1QXM5Gqgxh6H5zehazyCrAJC2HjwyAedwkLCPw71rNtNCnJTZBDTaXp49aMQRui6G4",
  "key25": "d6R7KzuBsE2d5pgdg7zgpsABCkzMS5W186EtSbJTpswuS8o1ZH4gw7H2mnR5yknV65vcLnQGJqmezcJxCaqU76a",
  "key26": "4vXRzsXS5AYCH82SVSorkzyYjpWwwfbrCcHjRKwacJqCBcctoFLmFcVtHdLBKb5tZVmUgYEj9PaLPUgG7V35dMJD",
  "key27": "4wMx6uy7iDdQahsDSbkVRTXspfJouLxKxnK77TXTrXk4SA9UDK5TCZWCPjPznGehSkamPgWZWe6vhBQ4cXbZmUnr",
  "key28": "5UhudLTn7oBciF8BiDtP9JcSBi46jPRKkBiqdjKKZXFykKSsfPq9Mkp2431toP5rmSQ7enekWFjws181zskdRS7Q",
  "key29": "3WzB1TTrWwRNaHKf97wkfL2zcN67DynZZicebyNwdH5jrjbnqHGthdgPQYyJ4mKuqNzHQUpSGuXYZrjxDc6rMoUt",
  "key30": "25spbxbcr3SmW5QkUUekSYdoiKt8MoMaXxHtobgE8MrKKHdAu9nNvjFynkUMDi1DmdH3PovtyUZsG1NXVGuoTsuz",
  "key31": "3BFLmbN7gEb73amtbfVPyLb6XdJ7exevZVSmn4tCg98srF4sGpE6irdxr4BzgRmhGyWYzBxJuvcgChRYGUeR3gEC",
  "key32": "5qqdW1g7BE9qN41yL6ARBqoytWb7qrP5uVKMKs71vZzZVpMVDotKNCDYCn9p37D2qZbAYEpJ411YnKJFFcTNy3py",
  "key33": "5H5s64WBoJnGMnkc5nPVUfdG2LSNVZ5uRo3Gn19oYB2N8FrEPBxsm2ku8cF31MHEMksCVsqsBJG4DqBpfMbVDkK",
  "key34": "3jg6VZQ2gyuCMf9mN8avGuSq7p6utmHhDajdb7FjCgGnCoFeNRC1PkdWZ9NegDYNi5CFQm9rx7wVTawjGik9ab9U",
  "key35": "5CR5q4wjrumVLcyTqDVz6zr2oMazF4NPwpb9JhfzGbeNkqFLR6KPyp1bAcVVC2Ndj5RNHn5u3nJmWZubrZfUqAX8",
  "key36": "bdQ9yV8DR1rxzFPUTAqsNDfWDhZzKH6MxkuBJF6pXQgKPohAwPYWsmEZLBhg4EUKRedemURw9JzuqhFXVcu2JBt",
  "key37": "3Dz5MeBpSv6Yinvxs5dPqNEDKEB1qbVELYrLtfnjcz3NqGfYavjkyb4XqbuAXtuSgTKmJngTv5WEbkkXTJsdYdst",
  "key38": "3YvQZCAjuSjxihVzBw29dvm338D2tL6WLV8F7gWwFeDvNsJZbM6RP6xoJU42me1fk1EtC84ywNTHhHWBSK7jzcUY",
  "key39": "3gi4MoB7M6c31KZpiGcH7C4Jn9t2GgCBfECiVLnw1n4yy7Umvz2rrUrrSxchtiqHEXowDaj42eKN4G7UHT5jsbUX",
  "key40": "5qey5VqpUY69TMRmY9r66zzDhKSdAnhGWRJqm1x7zKs1z4v4hbrrUk3aAEGhZY7qzjUsY8JENN64pnnUmBh9cxUf",
  "key41": "KiR3YAJLG6QPNqrbsja1qHdepX7dvdU6gbodJEYNQyQyupNLo2GwRkdaB7NHuhXXRXMCk1oMLc1hstZJhpTfNez",
  "key42": "gifznsgR6EFn3s5JbA2tTxwrE8yMgheX6dvncYX9vM4G1i2Ux35owS5uh8SJhEfWxTR1EHjYt99KeDrhtRaCPaP"
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
