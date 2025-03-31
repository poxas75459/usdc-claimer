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
    "n9HW5jnGc8PXqkKk6btUqu2bXqu5MUcSbTbvKcAGdTnmNFCnVGfCK1xAPaD4HkDyhNxYikrFcvsxaGb18GuDxMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGP4ko3R2haZk9BiEjL9XTvuWSrNcAwjCAuMDD91ZiLkaGo27YsApqYfUTPk4pjz2thyBmFJLYCqqij84GdS629",
  "key1": "5RQKbaUEqfFgJ7JCPR3VigbpgYyAb8vuBGzL71dGG91VdvefrJjqzz5CsXUy1zdcAmMJNs9uZCVHeDdtLXVSAoNv",
  "key2": "4QRceDb59cHwtphToNPvRRiDb3XymjSNknckZFfdWby5BYLccWj4LnANxEBwEEg5DqU7aeentfBGGHuHvcL741x1",
  "key3": "4rmYrgbB5HCY45r6twnF69jWNGDCVgybiCatkPBfaBixEhoSsbTn9vB1XZZnmJ9BBgELYJS2coHERZBURGN5pLn6",
  "key4": "47mJ7LykQYU4Yo1nNhvSeUN7HxKFXR9pysjxw1WYR8BnPCmmLzDfQTxrQyAcbDjxfQibRTuTH6NrHLSpTTswaU8H",
  "key5": "2pjK33wdNqwk5G2iPx8GZDh8T3tho87M2LdeCWp8BZtYrbFQ4w5pXZ8ZFqVQ63jSJWL7AcjC5673Q2Lyva32PqzJ",
  "key6": "2Fc9a46YLAhGge9WKh41zVRJKuVDjNipruYD6v7MC3X68Bbrf7VWYeJsepD7iDz1a3ZZRTdfVtwSsmQ3DZMPy2rX",
  "key7": "5YpJfVQq8J62pCETCrBZeqF325wNRm642vXoTQtfGLHtkiTfrHumsQMpAUz4FCkbsmp4JtNH5pn8DkYfT5zF9gcH",
  "key8": "3RCe4yMavfBtdTvASjEoMWtAjB7TQK79pqK2a3nBsEdh4CSejEs9cisFhMAnKP9Gm3nF3R8ykyxSMUbbgR7nXTcb",
  "key9": "5EuWL98zLNCw6zbUkn6M9v2DHNDa1x6ruN2kqyNpQKJSNKppuMvT1sBzrda8D8ypzCHF98PRArSiudsvrx4hsQdG",
  "key10": "5WZ9eLTpn94NKHv4k3vbtJQybx78x12moLGr1sQmXdJcN7v1cb8F3boAFP9uaF1yJU1vb61LvsquHqZRNVDtSwpB",
  "key11": "5X4E11z1w3WQQ4VxJM11zBjGaWkWZPyGjMk2ADeKXsDKBxRyJ6x4RYdB423vPCBEs11kL8oq4wkK6JLoKcuaRpZu",
  "key12": "4vaDASs8SQTo9aTCRXTYpt35Yrf7a5ePubBBDKrCp1X4RtnKK6Ki1EyhUpimX8QQierRgfb4Cnam9yZdRMykVtmW",
  "key13": "28SCJdeFB8zcra4Cz8qVS91wha5hncNb1LE3B6jYC7oudAaAYjiDSqs2kaDXCFwR58hCke9Xdkpjbyjpe4Lk3dCv",
  "key14": "3yRsoW7EwXTwEGf6d8c5CLsLdRebKneFqh9MhMZptxXsD1GZxAHsLeBFMAR82Kr7zPkTF6L2VMYT6nvZHMbzQVwU",
  "key15": "35PZJbbgZGvjraUY248fcKK5ienHEn49tXxNcxkiRft2otP9BgM7Piv5DyHa37CQ843cMbyb2nhY9gaCHuFLjBUW",
  "key16": "3UJsqUgzv5axJ1aWmZVWse7paWbAQfSCpJx4EPs5mS38LK4uw62k7AKyuy5PdwHoD2QSJwtDJKpmtpsfsz5H6LbD",
  "key17": "4H8xaVPKmUq3M8CLbHUNHzqpG4LXG8p2ewkHoQjpqKdi83GrjASiwnT2dK4NcyxCTnydk5pee9EDKNNUBB8ctTXE",
  "key18": "NzjX1Ku9BqY6CGrEkh35wFwZoRHHneYw73dBXkVj881tUZk4ci2W7rrnmMxzaKwBXs891HAiUMcAwp8VYhff3ZP",
  "key19": "4s2SDpjnj6LA2Na4GsM8iKDhrHAFNmA3xK33SvmSQ1aCmdVKNKZJJP2RLPQWESgLTcSzBgcBnT91DqTEsGSNVvBm",
  "key20": "32xaVjAbuhxPws7tEExp7EymhTa4ktjVY551yfdZrN7KFtstPuYSKbFU7rfCWZwmdEqgL1UjfojHdnyBh28gHqce",
  "key21": "kVJhkMDyYE5zYkEeLgLnauRhvdt8DByPvnWVn98uZKixs9CZ6UpzWidtN18km6MpTBYu13VNFY75DVnsqJmkRm4",
  "key22": "2C5Cf8s7wGkib3tYkvghgNsbXaVXBbMK9rKTQpwcPSQMuRqC1eKTRGsmEYjf8eiPRLvmQPxyT4cCntvMfkkqpB7g",
  "key23": "MqgDhsXz1xr6UPopgu4EqnjcNZTBdfXpUnPw5nDob713QzQbTQ64GXXRsD8p3jWp2gfYGLsK37CZQWy25QgoZcS",
  "key24": "2VSoDDjgsht922U3BYwzMa4UeMhcY5TNG6DoiidEaQEiiBdUTZBqR5C4aGzNaHGRKqhUhjm5qyWkDUoU4B69AU3c",
  "key25": "2VdWMn8mJEk9GfaztBif5e1z6SRMpPA94V3jDAaiLDyBXphgqjr7vyin62xA9CVELjpRhEtRk1KKnLusXCVqRHDb",
  "key26": "5YwRw9pSBexK55RdZJXvfjiRJRP5fUqAQNBHFXbkGVcNWXjL3s7HwfAiVWQauZmX1Q46xsq7M3HcoaAr4PTo7cQg",
  "key27": "4VTYTFN4tSkfZ1ZsTyNGyUVWYasqFQnocBy8gx8YRQCGPHorhywBKoXQU1b8PbUD6E5G2QRmgCDHujm3cNA37bXg",
  "key28": "aXwRUov7M4WYWj2YK14RQWicCcAJ9EuuuzKzkJ9p7EerFVzFNRKhLCB8qkeVpk8JmNVm2JQ36HMMTBnLLEYEmEG"
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
