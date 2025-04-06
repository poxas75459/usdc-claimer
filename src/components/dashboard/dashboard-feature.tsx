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
    "3CC56nCfFRh8MnqdSR1NVKoDdrjsPxXyxvJcnxZfAsENXMD2NUNAk6TpiVCQ3pMmjsPTYKTf9TVFNa8bd13FJbwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahBVkfNNAxETCRr8t1TdF1KpdFJEgmsTZ42QGYBN9NdfnQ1WwphiqEC2M24wqkG3wx67XQR3gnwJ8AadDaLsQq1",
  "key1": "5W9jjK7uBnKaW4h16UMpyqGsJhiicZHotpFVPCZeVR1PRszRxB3AgMPAuxCnwjp1Wy4LDuR1iY8QdaYZaYswtvbc",
  "key2": "5YYVkfHJnHhcoDBw72x6TtKgCrwZWQJ3LHhiPRhqqWNy2NGFjLGWEmj88otgvwMFPQoVCqsoQFpP2MeKPcsJ3Ami",
  "key3": "2NsDwPTSDRjbCwnhh58fDjvQgJrc7MBvT7AjKEnTmfwJ9wXmznC3VCgw7vXUDnAPZ38RJ7rAfiKwmVJEaciLqWxE",
  "key4": "5YsSPxwwa62RU1AFwGfBTomzJVjtg5vUCU2hUYfetwNeFMHV1FZ2Brhf354iRekDiqijKPQtQ3yZW6j5WuUifs86",
  "key5": "2ygdZhQa2d7sbPXuWa2rpsApo47d4rYeC24NyVhEvpMjZXHvg3SA7cffNCbgu25XDqBoHrbQVsUDMmqEsJAHRpSV",
  "key6": "4RCVa3AL1CvnqggXrFV1McNvoorWskzV3JAbAkbczajnUgiaXWKqQSsgvG2ULzW1nTgBuyQqaTeUWphjnea3QNUK",
  "key7": "aBLQm5BZ5YtnNLfa6QZhLQrBr3NYgoWdgHHBmV7y5uzW9yv9wEbJuPydwWFf359yCNbNNTPWzNGoXodPauRYTLH",
  "key8": "4XJTTU7v6RdhWcnHvTYzVRZ1ddXuUDVUA6ULS2AXz2S7JyLdJhqkmqcQow43hd1u842PzBtoKWcoK48Ujwu6dJR1",
  "key9": "21P8ffZWsr6wK5xeuxirAui6D2iAGe7vDsgBSXb5K71SADSRnRGZqXvkm9MsVPgp9FRiLhxYFo3vKBXVM2rRSt9n",
  "key10": "YSJzhFadirfkNKxHx3MTshFBtsd4VniUhfGwzdYGU9mAzZA2wtuvEqSgMSSyCkTas9z7MGe28HAyPdgfoTsKA9R",
  "key11": "3ZZqMiya1HQxmaA39LrRLQt9ZyveiNYf66TAKtrEVXSghka4gMo9JZz2d76oKg5qr8eMgh6LKe6p47mX52yzWE6N",
  "key12": "4CXhKznDbzukXyNFNEscsrGZNbK5x4oXLZeMfaHbsnH9QSY1mtzVSKQ2brUGGKcaCdLbrc5U1fzgfH1iB7oNZLqc",
  "key13": "31NusRm8MFByv7JvHLgt1abkWWeLMfgZ2KtvXhZgCFr2t4sDFg36wLC9F3G3aNJoMVZjkfsG7DUfdEhBiMFHkVPr",
  "key14": "4CP9Zdj5NBLkXwptzZcv7dfdZR5rV9vnxvdD2YwABC9jHvKY8sCDTmnza54JewGuN7Pzge5nUsZ6h3KEMCgc8oSP",
  "key15": "d4copzJahsNDCh6BPLs75BTEMDEqj6Y4knoNVrFxdogD7Nr9HxQDxtNjdtacv9pvafTSFHF6ih2GB8tYp6ua65H",
  "key16": "2qwRAtfeQRHix5q1Y4JyyZJw9zYUdb3D6BQfSdMUCgsxRQXFdAoeQjbojnrL6mmZfqJb8wvCh7pdstsiPjhmBBJV",
  "key17": "2sSiTrm4AesymEjB2AVzxi9iuTSnS5K1XPo3DRRnfDUP1tX4Le9pMtUTmMUiSE4JMczR3fNqyWSnp8m28MiB4HBM",
  "key18": "3NjE4dbJ762M4Jg5STYfFx9wWuvMBFSpP4QSowTAkBWb2dbe5cUC7tGbj3KyPnwB6zfQvgmzdYmF2iHtQp8yrF4w",
  "key19": "VKwegp1iBXZbuZ4fCJQuZXf388GMidZnfjYN5E2VohdkSex2G1JUDy14wQcFHYkNuoPC7CZ8VKXsJoQr6DC3fzF",
  "key20": "tVbTqnQFRRHXuMxQDZNgxXPhx1eaFa1AnbxqSTPnzehcbcQ6yuwPcjTuyahnqsYFHUfRgAHjuY8W59QaR2Z6CLH",
  "key21": "RrrfNTdJR78Mu597agPURZ4pdfHsrJ4x4P6Wsx7XfgjeoufS77A4tcmiZ2wmUrwbkQXRLLH5uj8C6ms5j2H4Wrn",
  "key22": "5TbF8b7ciNv2TuVQp4bX3HyAHsEsGkpHMMVKq6sxsD2XMuvwigXvvWALrfWHjEwoXTfnCtm2DtqHmghK6FupBhTE",
  "key23": "2KV2zA8KGotvhiQ5gH6VWrcmyT28dRGfe9u7L5oT7zZ59oPPca148TFP5FkqmMXgmFSWg1GQ97YNVpk1ygQZNmei",
  "key24": "3EdEMxVjJcm6oNdpistoSjmRsYewb2jvkGWP2whSBioeHvW94eSyx3BeeXfqhq1CF357mJWhnRo12UkVR5fU8uKB",
  "key25": "4KHdo92H5QQm6kM6WUc77eJqbw8Anh5J6cvQqTbRDxDGyViTAY68HDVwibLZiiDUiYfNrFUvqRVpBvz3wZpZN8jT",
  "key26": "3UktDACt9qB6jgaajGPesGBJdeYr3DpFAsJrHgRYbAFR333AyCDcauyhPeA3FoyXiHFhZ2kypt2c8Rnn5UESrWf9",
  "key27": "27ZDDiRNvt76ikaSWe3VxiCqkDFKDBFA2xht794WdjTZbvok3jq5inGPVE6TwfqTo1B6zPt68z1MfbweiGPFuiyy",
  "key28": "4XpysqDTyhWzXg2Kc9JpTktijuR2PAhm5AgVWnKSa77yz7awz7rFSJKTQhZZVLyjQedK3otNRt2UdFiG2qbadeDw",
  "key29": "3swDDcgiznhaXMAUyg21MxGhuGaKzDBLEpwJ8oWfMd118LB2oLxwW9NJAmrHD1PphXtVuyvqM3aErJDwGpzRPDCK",
  "key30": "5zgQmiL6VZHUTx4C2yWtsqEajspGvyypKGMFrayeMpfvnhU6BWrAfbZJafcHVJJPYnaNx72ZZ6bgx3LpQYgHdZYk",
  "key31": "3hfm7iikvLjHEWSrRqPEyHr3hsyG8EXwen2S2e3idQMu782zqg43KNLsN1Ug6bMtkMuxNfcucaRNLbBCSZhotgH9",
  "key32": "58qfzeGwUF4PDnno5n9V88QMCaoWyFt3EobV63SrRpXN3AYjJ1FA2vak35PurWuFW88mwDGXMUfdNTPv9QoJcNE",
  "key33": "23S8DuwB7g8PheVyCj4vczNxCf9iN1HfpHojev16RWhHtdP7H4tGD9kxEgWDCrNj55ohtCKf7uGLpRyr6Qte4mxu",
  "key34": "4TcFGRdmigaJE4GQ4qSgoAq1haKyKqyZZRbpPUUy6js154BABhe74Jd4xfzGWMjmdLc3Bmz347RG2rSR5tavdqJL",
  "key35": "5Nh6iu4Z9mJUPw13sNTSVhCFTjNuhEqxeAEWQkNMFeuVDms5XNWExUDBzCeSc4KJhUb6jTmLJzGfdxBjVYi7RHWb",
  "key36": "2cJECSmJ6hWUPgRAwaHhYg5wcauLP3DbCRkW6ogqoDorKNfRNrDZAKAzPczRmSDx3tuQb7g4CVLe78g4LbvUiu6C",
  "key37": "267nsg41371eJ7bivN9MBVALvsWPEwpkbM2RAGXrJujKHLUxUKNFrjGcrTBiDDGGEDe4g3aASqkHCMWBuHgAqRdm",
  "key38": "4n2M45gB9tfgwSkB8wo46wA6Uqv21zdffk9LdafSP9U1Ad9HpfjzmBXL9LW4yDHMnyyApSifxK8EQGcWbN7LHiRF",
  "key39": "5XovcMVdSMJFCNKsvQ3f5RHrWZ5AFuUDMC3dE5652Ck2kisLNuwfc6Vf2EAsktBV6HncmysYcqS4EFR8Z2q1iLUq",
  "key40": "5hrZynyLJnrY9Zi2tuGQxYt49xrt9KBYRCzD4jacxtH8HvV3hpmemZEXLZeEEoQaUxC7rojj6smDw4EF2LYwKdsC",
  "key41": "44wfsBczXpP1u8c5WZmGuVVaDXM7CLE8pRk2cYT2wTKNrCEhTYMA4r6u3rU5NLHTK2ZEJL5y7Spy5WzJSn39bZiu",
  "key42": "3xQBuLi4VMim5tw3DGdVaeU4udCsfiV9ZWK955ABLNJC5zVFV73gP3RoYPi6q2aSWGR3UFFdskGgkLcJt9W4sDJp",
  "key43": "4YbRXmunTimRNP9gRkRgRPCmjyr6WKmrSJ2HjnR2wZXhQ5Hjh1zg6MMNVAT3vWApA3gQgenxJv4HTHUmiikhKQoR",
  "key44": "2VTF15uQXRBXgDaeEydRZz4FCMHVaGyNULwx8FAN6jh743GR36dTV4c2TvNgBcePLAFkU5KuWtFFFn6yK5pJV6gJ"
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
