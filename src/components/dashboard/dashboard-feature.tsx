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
    "3EEv5AyCuGKMsWYdtsRqPDNoPJkyWWoE2wrtQzttQE2gfhVEtMrVfApeNKSa1YncHe516DE83RGpe5c8SbgoFmP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaK1Q9s3j15ogWspnuMniwyLKfAkJbzKrmnJ17pwr2jAXWWGjUWfTHJfXBhQ5MkT7AxYMTtyptMnNpFg9x46wba",
  "key1": "2uxpCtGQJxDu7WrZxCxp2ZJeGEX8ZeUjceV93Q8hom1fcnZanU366sSpuNMrTdE7mqSnTshL9K8v5TDZ6fWddhSE",
  "key2": "tjv5qKPMikjUT5aM8iPb3bDZBFXaaqNZhVwofAEhjwwTqv4Nq1cVHKWHp3EEVpMaAkGqicQrY8S96bc7J3onyh9",
  "key3": "75cyJpdM8d2etwYmZzEUCdBZwXP2M9M8o9eGDrZrHnmLLkGpb62jbYAci3MHXLgwuZhiPG48JCVPKSVpKPxDbyV",
  "key4": "2dXde6W4LiEQKxoo1vUWWKEPDFfU9KDqSaAFo61aXCnr4gpZYoo6Koekwr8KfSh7Pwg8JdYwkdsMBK4dpSVe7hmY",
  "key5": "je8oYc5gwbAy7t3fehGxnKmZkiBj6hHsGAmRNN4sXrmwvsGJ3hbf4XWAUEBRoMcxZKLtbED2Ukw4QRyVYZbayyY",
  "key6": "5BRLyoeaJdEPPtADoynf3y9nksdyQVZHiLrA3jaU3UjsfFBmGXDcKjd4P7WHhM1BAvFyzyFQ2xG3JtP7Q9P4nBTJ",
  "key7": "5QKxpzYEvFjxJJabYQJvChX5AAVMBtasnHYLr2s2t3oRp1UCzovZdaSWF9PE1kxbuCk9Nt7TgivNtu1c1a78UhYX",
  "key8": "61vgFRC88Sy1PDmtVwzyMsykSmfEyCNDwSpSp7H9uWUzmNHha8DqA6fizWG4nBk6sxbJHLWG5BiC1wybu3YpzRyz",
  "key9": "3iL7X5TYx1ooyvfnbERDJbDCZdAHZiJzxRXTi4p361qPpGkhrUXEe6uxS3iNjbuTUc7DRUEPCbVwbMU1t7oyMwpS",
  "key10": "3cQxt1TgfRxA5riaiVk7yK4Pc3oGHpUGiiuyJrjwHdmDufssZMTLeGZyQGHuoSW22W2FaPtBAdJjWTgaxZRDGWFd",
  "key11": "5kPTyMtMZr14Fhh4Vz1ZtVGrPFGAXkW72EGzyFsDQz938vZuDzwFkAAXbMrsLF7KYU98yxC1NFy13mfhGGBRKhxg",
  "key12": "2PzkD4fCazEvoi51biATzL83vUKanDT8s6PqVP4RTW9cGxL68kagJsT7TB2ATXrJnW3JwVjc8EDzLP9qEPUngCmf",
  "key13": "5AR7GZVtTZKJnY1WV52YR4ddR7gVcxsmenmA4DvJeZ6F5oaENeLsLLVHXwtAhssTYT2ydvDALECxSE5timnEpsHp",
  "key14": "4wTn58mewXHiZgRhFqpMaA7AvuokUQxmyaWDPTqcVVT3kivxt52DfZaLKMX7sFLUDeZV9Jg8NAcvyeRuYtRp88nU",
  "key15": "wscJkDJwkLe4XhgH886S221dWngw7XFAs536S7yGtHKC83kJWEjnXbbD4Kyu1qJaduLr5AsVhmvezm19uFvtVHB",
  "key16": "2JCExh346wEd3CMJg6TAA3ub5roRjJbmkMLzGtCQLG4gTfRMy6GEEveQkyVvRJVUe1MWYEwhghKPhw5SXSJwfP2U",
  "key17": "4pt3c7wwvPnVtpWZ8jjPf8mJeCmwFCtQdskATybybcDtAySMuQdRXto8Dg23sjhWHZ8Zz1bENNEWaLwJNmiRKDe6",
  "key18": "Lk6rqhqcMdhLG5Lf1RgVSDpRDytwrYN1CkJBzhPNbNpZfQ41jvC71V67xyfrb3CdZzjnzvPvE8m4XVXzxuMPVjA",
  "key19": "rtCvFUtR4aMpk4BhfHKULidgM2CqoWwfYmEiWM4Ycotn1h6WievbStZhXvt4oGeWdDYzv592GS4ZVvio9vHTvau",
  "key20": "5vhqSZCt5AzTmommwwGocqi4Zg6cBTPt9wypnEtuSSGUJFhNXGd9EsaB7MWVndcGJmMSBQzDkt2p5w9XoQkEWyw7",
  "key21": "4qd3RLc1LUSL7fs2uxBx4WrtPnyGuP58Cb5o868q2dFaykvPpgcieEW2rbPt1tV6kYwTQr4o1SRafmx767A57PrJ",
  "key22": "4oUsMBtQAVCP5mf8QtLWSMqYdgSPXnhjJGLsu6boGrnJLpgw4TC6SXD1Rvm6waimF6zjgQ6BbTinSdkJGsVpiZLe",
  "key23": "3ccvXKGpusgFPaXZDDp1zfbvkrRUhKJ9pU9VJPghocAsoXjvND1RWPgJ8D8eoxNhnhzShtx9k9CcGpYLzJRgDqDE",
  "key24": "2g19vJ2mJ35bGyVGBjZkFS6hSTWe5JKwAFoU1eF4jmKvxmQr8NzJa16bgm6M89uq1gTLvATscUh7Y4Cr7T6iDw58",
  "key25": "2USpxpLTz1KsAG226fCXhdndcybAz3qbuhEVtWDScm3GJJEnruQ6VjT4xC4xPtpoe2J48Vewic9MQepBWcPLZ55P",
  "key26": "3Hrsfs2axzjuUiWtq4GBinQguH2zJFfMize7nedAfUpRdL2xHsUNxz5Qg3VmViqMoY4JCoE8cmuAyP8FCNW25NkA",
  "key27": "3oBg2DknJY6qLLu4QLhc9RbSbdEryHKGUwmWo71846TSgS7LgQPbGf5pfAXCZkXCSUGgdoaBgBsniCQ7ZuEmbK5j",
  "key28": "s4TJHPEEw9Bez1pnqvE2KWf7TZRvqcAFkL47mhzRdoTwjYMqogLDasgD2p7EPvEo8CLF1YhrA1CByKZKagEdHaH"
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
