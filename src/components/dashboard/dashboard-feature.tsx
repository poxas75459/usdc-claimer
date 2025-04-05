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
    "2Aa8Hw1EPygde7PRG5mK1Pb6Yjmhw7g6FyeRmNvgX7qaWLpNYucMrSAViJbtVC7qwHq9Gycky71DTWSAYyPSTiWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oPRMwnvbdcmeMKK73ptAw8ABPotnfxHNnsdT9kwMxKyBzBBRQquXPxxkm82xbbW3hLjFLfAhdPtSCoUdcyAA4U",
  "key1": "3A9NGS6519bb3WUscrDcjkarDCrZS5EUUkgBu9UxjtjdJZAAbCWM3miCceGqM2G7raBY7yucjocfvCEci4nCbimm",
  "key2": "4fZnh6TGj2NzXGGDnA4m6xsTNaYxvcYqvDwComvUAN1HVaSpFGqYwZ4j6unPZXANQZoDthUjUN956JE79BwV55qL",
  "key3": "2S3g2APTuXkeJdsKj3hfuRLQh9eSRNkUY1Wa53ZqE9ip6HicFcbUgymsyR1FU6XeHRpa5d2M3w82cvKcU469B4cf",
  "key4": "4RQyDXQGJsC3bn85gAoAhsrSmaWpFGfNuwt9rQCE5kiM7FEbHJdBNLaQaAgfS84eEn1w54tfk4Q9Y8mNDgWfev3g",
  "key5": "4ZX5yofqCK5B6jp6AiAvS5avgbedrYTacsQrEPx7wzK88yxtMVCwApJaemBJeYmjje5dEyQnu9NkeWo78dkNoTNe",
  "key6": "QjLftmScqgfs2Hvvng9juDkf8ouUGtXYXMJmZoZwSm8i1H2p3Q1kA3e7fqPS26FXphHb9kmTHXiCDpEmSYcH63n",
  "key7": "3mnqKeAsaEE73UNBkk2B7muvN3oRDV27saSi3TYRGQ3rLJTAqHFji33dwFdZuGSnbhxLd5DhonJeAbHxKCLNr9Vx",
  "key8": "3UDT3mB7wHgpdmyWHGobwQnuE1XvVtVotqPKB41kfdvt8tdSEpj7RvRyjUpjH1CrkEaFXjbZfaHyEEUAWr39s5oh",
  "key9": "3NEuGyKtTw69mEu4JiMCguMNtkwkP1bJukAhyvePYKFSirXkNhxiv4D63w1YZQK7TDMxPdhagcczEyT9vQQUgWb6",
  "key10": "3fBu1ZhErxdoZJscSSuCZkK2orDyHoCCV91MRXtiivGkPUTDdRrXnsk82cgFRafeRs1Ett5fGJJV3teEQJDipoQ2",
  "key11": "3X5foopmZJGegUtjjM3VSK9ydCegGbfrQWaA9zAvJnj4HKZeE9dqFbZgTVKJd3HAmKPEwrRT4ZqNdZCfogVzEdpP",
  "key12": "6YLHaKaHQfm3n7zirpbucGm5D3ESnEd2Th47Ma8fsgFtqEU184n8otY21UKVefjHj5MNCqSuCgx18tgTEyzema7",
  "key13": "4ADdSv11bFDhyC2CeyJUitkG2jcXTq6fLUwpfS14z1gRPK5L3doNdsHDLx84eNJ99CX2EBsDThve2WRRw2ff2DLB",
  "key14": "26mwpFUdvFLB98Ltaddb9GuuBnnqoEX7SfWcCJutSDLdvrHoyaPqE8dYoXNehYmwYBEms7UtmSpiwji2iaDaSucg",
  "key15": "2FASnnbPiCbysB79fKjSxQKxw2cVgpBwYDfvcCmXbYFkjhCHF5uo16X3WCTXzX17Hyd4KKoTFrYGxMYedWd2PVjU",
  "key16": "2qQu94ptqnCFFqwbDZNzsKVCrSRZxyuSh8gerG4WCW3K3b5ULBBqBwBMMdMJCJFTkzxoqN8ZYNJAFq4fe3yDWc5o",
  "key17": "381eZKkbp4ScERNzS8B5iobGJwnaCdAgFk4dCAoQjjEHdJhcfrjSTAeQe5bF6gKZ9EE6XBij2q38B2T4JC5CYA7A",
  "key18": "5YacagDTv4ygHNPKQ8XmDZXjHg4AokhM9AxAYTqkaxpvgf1HUB7gBdutEgGhufT2sp2pX6Bt4QHNzuCXPTcLaEW6",
  "key19": "pqG3dS663WRCKfEki7Csvum6jRJeMnWbGLtettCTgbX91euVx2yDshuacZ8X4Tdae82EKT9wpa2Xa8meAzGMQsk",
  "key20": "2SHNCSM1vzWLdLbWSxmeAewrgbdr4JVzyxZAoJ9hVeZ15EGDJxjF2v5xVsxmvjqAH4AHaT3t6jaRHP14U7wQag2a",
  "key21": "5XV2esvTfcfyQbz95oDXgPpwHDpcRgFGCW9vw3JmM2TJCQRwT5yiptYuc9y4e8Fk7pE8scnAztFYxGXLATSRxBkW",
  "key22": "3ZExT3H34ophqqf9VaLrPzY2SYPCHwYejX9dc6FjvxyKx6imJTXApJFJ7oVvWfhhxktXiGZa7hwPL4YBXWA6zyVT",
  "key23": "294DYsGBn2VBTENtzMDNfszP3hTvaFtH4Qt8kbj43DB7zahKqg67MDBpVrda9Jsi3n7NSf9sCazsdDozkz1ZfMrY",
  "key24": "3oyiGhvYokiu81Lt1x4Rrt5tHNf9GfazW1LLtb3dKveUq8L7fZnZGokC9zu6o3eBLiW7FNvmrkH5yddqPTAoCdyn",
  "key25": "q38DNbU6Txr9eTsHCdSBXCWSzvhQ5Cpt9wCrvHevYBKHiH3A57bF4nqKMk5HQTW9pR8j7wXWABZct3G2JQHsZpn",
  "key26": "2EhXrvC9Pp2Umxre8iisrSUgfKGkhQeGPGAdsbwdGK54Kez3XJdrXMgMYmnzKgyPtaRhzG7tb7FQ1QU49ex5AA8u"
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
