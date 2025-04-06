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
    "4Ad7ubU7qLwoUn1hbyeVnPqh9VN9YJ7xoPJDKwh1WyhorUbUvKXaDFKC35N6Zog6U9m8xaQeAHmMsvjYqeNCU2C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQjqb1m61eoBhfVuHGDFiDMV6Cc7D8UCV95ttQeLRXN9mCwtJUnWrYVTC7A4w3C4zBwfVjd9g5anseTKrU8ej3f",
  "key1": "4LuR786SMmXCAq8qTVGnaxMEUnWWGdnJaFyCr9sFpdknKvapMK3jkEHojCdoGnoLB6EsP9R66W6cyKt2QgCnwiJL",
  "key2": "3AphMX5c2XQso8aghMvtMaTfnuzsmPNEvejK4p9d82oLQGhQubTHp52jbQG2DBdymHe2fWE6NPDugUz1yxXBrtTy",
  "key3": "eAVCe3kLE5Vr7rQhjwPxcGLa2pkWHQxRkektKe8WuA54i5SNYpgdX3SwwoG2DhiT9nkxFBQcfd4okgSSZn6aCgB",
  "key4": "5Ec7fZcAwrGEtEo1fU6677ak35EfE3NfX1ANU48bxgaN5ewHRFqR7ojBXezxg1drN9VuzdMgSwMBxX8Cw8AUoXcX",
  "key5": "m7R4GHCPCzxtiF24ufQXa8Hz4mGmGKR2GUkQbvjbBeywJff75z1xsmNLuJaWMiKhFjCJd8fetdfguDuv4fuZdZv",
  "key6": "23BbHmZkco5m4AP9nrKUtysC239piBke8QxqCLDxiLHJAh7DJw63rE5GY4KNt9dFZDvqUi3MDuxHGo5BbT6mHEVQ",
  "key7": "3P1K5px5iCnzgJx6MxJehWdS3viSWkhZw6gAqZ5YnCP6aGxu6pmJcAS9whJH6c4Wixh8yc6aVTPpwhXfo4Lg8Ehx",
  "key8": "124oZVKgjqDZvYutS4eEpqV4t4Y7AbVb7PpE7ZjiA8GyYZozhZ23cQcJbToezKAjBkncxhZrXxKMAZUCG4UFGmwx",
  "key9": "5psvCbQqTjNgh5xDaNrSQvvHf1YiexWtTuJygpzhQziT44z7f1WAAa5Ht1xuVvPw3vnStuSmkyewoBBBQxB187WU",
  "key10": "3SBvGcp8W8FLfzSsvs1SCwhgExmL2pLrQh3Ehs8MAQ5H3veWCjsYLMuL1N1kXV7yiqigUpSVMPUcKVXQe7rWg44K",
  "key11": "4y9nZW2BnDQRoHoiaAyNjZqbVuFLGSiPp5bRYkSwGz2D4b5RZStq6B8ZXuvpd3NxCHJGjtCokD4HNYpAcCUw8X2u",
  "key12": "4uwSwRbh5sMVY6AbGATHaMjpScScGnaw2b6sywaQeEAvgozynDESkP2p1FZjdMWHqSGrGJExv6wJ2yVM41zgnJAL",
  "key13": "5sEejmu41wDjPGeu5pLcwCrY58ATQ9ZrB36vRYji9s6JVkfvYu2b6S2GK5nxqCCNHPBDvAfiWzqvqior2jj9ziJS",
  "key14": "n5KHzQTmSejdf9frNNZKwwQ9Aunu9WmTX9qXvw9jY3nvxEsZHwGB43jxoDuCRpaj72RHeCt4yFBk3y5N7yn1RTt",
  "key15": "45eWpqAHEzQPBhesWjDqTebrLHucNbP2Wk4hskzyeNZ6LXHk9Yrrfxa1CNTcyVRhwfVUjfdzjVDvLR5KYeijzCbV",
  "key16": "kheLNc6WkMrwYsghYe33uh4hdoghUZUhdxXsyuF6tGY4bPZ1jwSFwa2Hoi89vVnRmYN73MXLVsD9QB6o4QuStCe",
  "key17": "41BjHUdgHNaEZMWAtrmB2TfTbED8Q4ncTaDSjC3AuL1jHL9nXKze5MjdbT2nG7657fKTVbyXRFLpp5UzVvb4YcW",
  "key18": "3aBaFAuDnjNCFkiXgheDbYvRPSRgMohChZUrGXbcHwW1ACP1GL36GTDEqpGk5YRMyPcQqVGBJuaK959zpfVzdSFp",
  "key19": "3K5ki4qvaFRMZRbsoWP5NkKmCsUoSXBx3tbyGWUr9HSgafzTcYZfosMqpzBVvFehT67ZK9QgLNWgA7SwYZgnVsnC",
  "key20": "5ioiDVLotod5bssPHmFxx3tnbWVtQdmZsiUtvGZ16S24y9sMHh6pxCdtvSoCn7koSuzK9zERh3tYEWqv83rReD2Y",
  "key21": "5th1VxcmL5LWCLpmoF3L6rzZEUaEFUWAmuoQDvrxNdYhRPYFZ6512sWrDPTZcb1Xt2Mg775kM6Ju6k7ei514JqBA",
  "key22": "3aYQ6EjRhhHvstXZwuUyz4CogRYNnRc62erJehnvG7LugvYtFqS59whYtAfia1V7746TGc2FZqDPh2gNyByheomW",
  "key23": "3eFAfv2LECygodHSH7z3RbJvGnMMDxeKRZFPTX47hK4fm3DM7fEGjAXjnpV6neynrSQtkiBTUZjs2oF5iS2oQrty",
  "key24": "FpTJSnEfZZxb3tGZnohyDKqe8fdc3ngYL4faLVz7XVr34z5aALKVPT27eqgLtFZdU25Q4swLxWsAnw6Mhdq35RM",
  "key25": "3KKWQG1FGvkDknZDccabgJkrKLT9TGh6qkVj6ptumjCnFSGmFLTarWNUXYhZHj5M5FhmFFstUK8cY6e5ng2MYjF1",
  "key26": "5nYsYsSfMnHt6NxkB9hNaWo3oWPg9ApvKoS4dqStbex2YCFicDQf1Do1qV6ZwrBW6mCHGqKUzjys6DxHNw6PLE8V",
  "key27": "2TPLy7qD1BcLxMJtqYZfCcyg5fQVjoRrhAtDThmofGBQHAsPwXexCpk7ptADu93ub292nxNCGfT2PDE3L2oXsPJ7"
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
