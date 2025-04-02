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
    "gy8bfqr818gHqqUS8iPGdDMgMPbsbbzJVBEzYwAnxBCtw1JSzbBrNpbzGd9heMYXtFdw8wuu9QigQTBLcYnzXVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UckfBhmK5WVRDYf2xbLrytp5xiPdtEwvipc5J4rFu4tNXMbEBrRvEoX6oQWFqUHQAJCAKqRYJ8TJKYNPLvoyDS",
  "key1": "SiDCB17mhUDtMWpBFZcijQUGx4zjXSmbkqMejEEvTqM1caexKFCbEtszXpDy74Xq9FR2TaFiZfTZkCReM6Xr5uc",
  "key2": "3g9i3zMozsnHH4vCNgHdBevudvQcz7V6W7V23xRcGMKojiKkKmVFkF8g8o3UCqqx5HdAwh8Gdm9cfCcsbRC3ptzw",
  "key3": "563wAh6EQDEWPRWUPScpYpYMBz8XEwmfHQ43csUGukELXizbYMGbBnfJTJoAUgp82aZG417ajqE4HHvaSHGPY4nQ",
  "key4": "2sHKsm3bXbTd6AP78AjvCScihgseJgAwzKxVUFpYrMWWKt5Y9TwgouRYshdVVuLPhmVELwPuW5FtqpWVpiJboKGp",
  "key5": "qw3dwuu67DPKL7NMFXq42WF8xChWTDZ2jtefc3j4jGcqvco6GAcJi2yGxgXbWbZUvmjDiWWbW8ZzRLNS1TsgYuW",
  "key6": "67ThpZemrkCr5FiynbTgiVsHiBBnAdGBCRg1Kw3Uppx3w8vQzKRoLbr3qndwspZRjQ3AumcTftMWijNVfiYu7hkT",
  "key7": "5fZ9DCh41JkccADL13Dgmr6jhBbaS9Q7fNrGcj34cHutR2tyjK22Wdh4awyFTn2uSALCNp4C5SzJfQ5uLsE6khsx",
  "key8": "ndvKDaeHm1yGqQG2m3muXPHWpWdNar8pxbYSxdjFJo3zWDz4sMjEVLDKooFV1hiW3HbtAQdL5GrU6vE9grJne3q",
  "key9": "2NKiZ7fw9pE5Z9pA2TEsojJYAxhgoTLfCAyUhEBmqB67q14sYLPyjLKFA7nE4RN1UWAfwcS7KdbXgexPX3dA96FQ",
  "key10": "39PSV4F2XXM6kQkQTCGxdmEbS6WbUcUmiRLapqdWgmGfjKR5nheNNctAsvMHzay5hZxsdeupjKAcPY7KMRLDEZbq",
  "key11": "2Rmcgp9X7t7uzN2tEcyMWXJqasn6oCUBRxQHeYDiD727EsENhcYS37hvG4znk4iv6v4nNtHMzpMDTk3ZjynRxjcY",
  "key12": "87QY8stxw4GA4RHzoN8upAdzk97aj8zDsBe9GDsTghm9rHCK3Sbm3nbFcwMF1KDYFGtNfk5BfWDXWVhyyf9v6rY",
  "key13": "29QswBmY3xDv1z9HcdzAvqLJG3hd18r1bx1XhWUpxKajYwmMFr4VRBC6LbQcwxTDNspNurCmUCCJmWexxu8Ayh2R",
  "key14": "9iBBsyYZKj8XfU4ErvX7vENztsqbi7Uqa3b7sVXniRJDYA3CQ2G4vkjx4iE6DrjqyCPP5NruksnUs7ywvBoUkuA",
  "key15": "47LuGeW111Ra9L1ckFuS6YupcwVPq6h81fAgkfMebfmsNuxcbwAanMf9tFcVDNs7ErQ96zw24gCMRBPydoRvyovj",
  "key16": "5b5THswFerMJNZkknggfAN5m1DJEbXStM68fkufXD8CECedwysgpqW682RQzwZh2FBSLbsDG1VwcCeuPfQnYYrVh",
  "key17": "36NqrZb3HQWUPULUiGHeYfsnwiLTxrvo1wUxbTmVF2JeJZXHok9MtD3Gwt8GFiyosGThHsDUQQ4wo5Nq8bGCib3u",
  "key18": "3mcEkJR3YFr5cqEhVDdbQboRwgaHjys5EUrL1UEEnPLYUYkQobb1GU5r7n2VMc4y3WuRogTNx3asc8sGxb5kReWq",
  "key19": "3Gfu5hUjDWDsdeRyutbxoGyxo8tTWxBs4o9njreNHzUtN8iDhPfKDqbkPftRfqwFQyeMoKSHzVGMPeW4BWaLS7VK",
  "key20": "JFqY4pNgknRuM1pfkMWv1mGyrA2K9oRHnBhoDgD5hUHv9usDT9pkekL7eS5tUzs6bmLDhEYky4FykihJg4sZ5Yz",
  "key21": "2Ku9FD68HPqNSnx3sML4zCYzvowdVEQ3fRUg6KBY5eLrsan8TMct4ohWATJHTZkrEhzz5eWbavb93RWz5se8pgEy",
  "key22": "NhejWT3eLgEmMbQ2qbS5Z5HoXoMruTnFJpdgwDXsoFsUZyJQH8wqzZYECij1aDN1NDk2cFpUumrsUn23Hu5kGfE",
  "key23": "45CmKXNuuuCEXmwCoq4fjP1o7wLrmrS1qSVuBz7aU8s2qBxmGHCbJtAkrUDAqWzykYAwA8WRnWx85de4r6xBHcGi",
  "key24": "211rrr3U57zkBi46WGhTFEdaLedxkc6NMLauXTw4oMGV8yykb8ZwwuvhTTqACvGETzKJ5Y5WTEaaogkMKdbXBjPs",
  "key25": "36oy3BR9mG8zN7Am9vhKGHpZxC13n82dKzmbu3KL1CLhxXXesraWqZqxWviPc4ucbm73VQ5Sy3UysHtpKunjJUX6",
  "key26": "61PH7nAhrZqDBtZwXRrPWEgf2KNEDvvto5sEmHwHWNcLBC7Foaxt2gNzEacJBGirZEyD36bsdj9ThDUvSjthcgGh",
  "key27": "56uCVLnm2gHLUo7w63DGfKHowQShGcmknkdBfGABYed9THTjXSJTTAE5eu3qajhV4UB6zL9RwXBcy2sjbVARaLhF",
  "key28": "cTgHx5qgnhH7E3fa7fC9SViWnXk7j9fpY9fCZZTyC3VyV8LVbybo2AdUtcHrXUJYhpp3jqvg5N5sm59iAYLxW9A",
  "key29": "2M48csHHza4f39PuWJASuT5FXEzUmbegKnBUh2HXwi31H6TkJToacwWn4pFDA7t6RJfDAjiyxsZajNN7tSL72R8k",
  "key30": "3Y8WvqU5cuccuR8MpBiQdhvkF5A3NexJ62bGr9ctENMieNU24XiTBV4SCEKDnU15sdqFyDuebgDubhWRMsGoMfdY",
  "key31": "3exfKrYQ4onsorxbovrkZALGpWvKmEWmpP5Z23nVFUQ25kwUoYkwtfxW1gS7FjWRfcFtzapaqEQua48LxMWarF5k"
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
