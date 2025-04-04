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
    "H9WQDRSheGpfvtwHrpPcvANSaw3ipzvyesQzEsr7FDZfERG3rTGkBH5XEKYrQZEmB9KXueQdGDHKX4W3vvfHEgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8XHeHtVqtYkTTQKcCtVR41EskCkiGp3cYxuQu4EdvRFuiLPywFqZjgEn8pTKV3rTppc3SBzxzCDE2EpQSjTaEY",
  "key1": "55hQ9AChRPGofKpQ9sBMT4Uepoyfg2u4WzJtehdyihWBpi5QKZRHDJ595oK429vAiWBGCcZcBff2Tf3eZdoZSYYx",
  "key2": "FBt481GXSjdKRax2QbEGefb3MnArTcvfHx2mwGDifE7xbpVL96FiN42HwernAWVp1P9YjNdU9K78rjUNGxxY1nV",
  "key3": "1Di91Dz8jWxQhc9i8YeyL8e7xfEzymJs8pCNqo85mnUDhyVF3fy37BVhGYdSAuhKSXxvuVEL387N8EQXhjXEdJd",
  "key4": "3EoZXXRmgwcLuJb8myt7w92n3kfGEYNha8y6Vr11NZgA6dX3WmsG2pUxX1pxZqadT8pgheCGYFrGgToHvoDmkMiY",
  "key5": "261Fv8Pk7dfzZhv55KKq631W3Hub9LUMnzvnh1oXBJ6jYNjQbi4WUDS6Vh7J3DLYVJZzuc5BpZ8jFZyTmxtkfFMr",
  "key6": "2jHp3TddLaRTqQJJaMLq25j5uroDNSp4HZ6MLGeyrUDMwKNeSx5ruRXFWcTjEUBRPSxsqJs6NnZkwJMpG7rDGLxU",
  "key7": "wNbjQ39LJCHKoLG59Wsym5oTuxTve8qgRYU217zjbEpzonmMHLLR6LpEeZYDjnKAWmGggNGkEWzX3TLJP24nHmZ",
  "key8": "26aYwWJs6nU6eWctioMGkkBaVmUE57n4aR5KkjiLouuCxTtn6AQJo6d1RYYZY56dcyc8TWyyLYDE7YNtmcUHCA2a",
  "key9": "aE5wNFxg6mpP5PH7Naj3ZEbf77hWSpur4NrovnS9LgnvTG6U7hRTdv1aGSi6tRjmkxFpEJpTK5QTpNr3pfYwasw",
  "key10": "4ZrQ2nRfwPdu4PcpwfihsWfWYax5C2wwSGSqp5FudxyQSjbVhD3qZ2Yto2HHJHRwc9y6gYLweP6kyn1X2gByPLKG",
  "key11": "2ByATeUbCxCzLgediNfvYZkJK3zVzv6ytNGPxKr54oTPxnkx3SR4VQGSnMT8akxZWoqkSvVwQVHhphz3YdUxksJj",
  "key12": "2g59ZoPy6tq9ukLbffGb54dwbvTQgDRhWUSscTLjJ4rRnSjVY3VVHEq4S2y9TEBuUbii6iDVAJGbVbkp38x5sRcn",
  "key13": "5B15i54GyjjZcfSUj9QKNxwC6o2NnzgeD11ckXGRC6hRwNwVUSGDcCCfrBXUicVuxNfxYkkDpxF5P7s64ULrBbtZ",
  "key14": "3ch39G4BcLLgJV6zeg6h87z2HWjc3GxsaxXC2WWHXScV2TYk8VtMPMygxgkvRifFedmdMkZ6PTKCmTC98HGKpe6Z",
  "key15": "2JMKaLoY5DZJ9LQTQX5afqT3imDrgaLHYGkTp7Dc6qZXvLyz4eFEi4AWbNF8UZiz8E4tcNnKGnk5t545e7QZTdin",
  "key16": "2VoxX2XVdYLj6j4kf2B4mkwCuCpbNUt2oGYfMoTDcyWW9rF6w8yWstgqmf3R42W6WpNt57zMzzevypXGauuhbEkT",
  "key17": "4b7uPMLaYkgtdM1GzArkipuKg9qzo21Paqku495rg8qgcFrgZoHXyrXa1KFauT62hkUadCpqhvUUenjexJ7U9jes",
  "key18": "5f35JofwPNWtdXX4UF31Z7XvnucDj21md3fQhBQvcEh8EEpm4BiC3z75TgkLXVPVe6pfxXbAVVw28HjRLAUAsuG2",
  "key19": "53anq77YysmCZZT7FKmK5s5S7SP2HwKbWSeobkz2PPXZkexWaGX6WdWHzDH2of6PtnLa8sBJCVzVB83YzscEh43w",
  "key20": "5wfEhJWyd9xaepzfKK9WjE5vjtf1FVjXWM4kCnjGnHhwakfgUuipEyyeH4pCH861cedsd7VDPqu4bbA78acb5ikf",
  "key21": "3gLMowVoQVnuDFVwFLynR6h9Rg8397PktzMkL7kC8ArSdDCphCM4jyACgTZiin4gB7mqiSyYw1HRXr6Zkm7RF3sj",
  "key22": "XWBKyJnSjo5JPKL277ax3zHHRYP6sT3XcSKPXGdNahRytdrj9rwQRP2TvcmyZ1F3gbB4bEwCt7LyZKAFqY2HKw2",
  "key23": "5bRcXB4WM2Jjuu2p1QnzRhXGE5g2CiBUHUweC1Rm5aPSF7McpkqniJUs9HThzxtbv4E1zTLthiH1x9oK1R185xRa",
  "key24": "2Jfjfo4Ez6CdNrY1cV4ShXVm5VdyX3NvmH8RzadCNLAorrndrekzt3TcVUFxddQgKu6Cnup8eVqWGkVVRw4dvwy1",
  "key25": "45nRPzhGZQ7qi1MRrVg3ncbEDXSUJPz2Hu2cjLnaM7rQEPBp9ZVWxUBSSjhWc63hNGGngzUwvm6rBzSV6DB753JW",
  "key26": "3EabaJzaWr2WXc5DuCwN2x3QyhbJXw3opwY5FJGXimB6XWyYZKNUgMy68J58HwAppCpcb13gcj6RHaJjZqpdk6nr",
  "key27": "4r3hg5k2nqJ6ja8R5KxKRQMbV9BVHcy7XTVbdgy6zTdD6NFFY8PKiR42SNE6sCiF3rNCNjp2DLf9wzDxmhbpajyp",
  "key28": "4zb7tDzzeHqvv4xxicpcehp4fdQD4btjoe9VVMu9zcWD1CweMTYCsc2NEKdwRb8F3yGE5Yq4VMnE3HESuRvVwKjx"
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
