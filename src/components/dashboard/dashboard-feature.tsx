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
    "gwfXahwcYZioFsVjzCwQGkhH6q2ji31NQymWhgUb5y3eYoXYxzhobwTjMvDZ8xKToeeJScF4gQx7pyegxenXe9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54TXx5JZ5BV9LqoFkvqayfBjUwTdXiMkHKuF3TxPngMsNzcofXgLXwhCQWnp6Gabk4SUki4VdZ2XvvFCbexHSwyc",
  "key1": "4Zfn7FPZR8m8RBapaXXzKEsjch1vzfPajTiP1gDAY8fX4GQoTBmx7pDbfyZCyakevGeGoggCEbbyjVcTLhmiJ4ot",
  "key2": "3rVNaJgXT5twgWCsp8tRhzDeARcRuYdEmaSQDNSLzKiKLdUFFGaK2TZBkCBiup22rSUEmG1jFiGyqFU28E6xLTyi",
  "key3": "5Jvmz4nGiXw47ppz3rHzr2ajBoiKA5ScQNffkzSfTZpR1dDumXJ1oAYzE1UaZ2ntJmbr58y59e7gn2tV1TDgJUwv",
  "key4": "5RRBdj4D8BAqdoBxKhkoYr1wAfKeW1v4r6NAh1DbWgVoCsFQdmD2TFiqVaairCFpj9EXkvxPHR3NEhxrKfMQiXaQ",
  "key5": "2LQFwWCNmjwG94jBdav6QxFmN5teYJBvw9Xv3cSeGzdVzsQkzXxLWRrkuwwB7c4kySpBmNNSEL529XuVrgJMWLLz",
  "key6": "2ipo2ACrLgUFggdmwmpyP2LxrdZXPAKec6ng86JxpEmHaM5a8XTqutTyYm5KHk4NZNMGfQBfoGqKLNUbEZZ39G7B",
  "key7": "37KDEbtMhmNtX3RDZ4bAboTeEBXBntbn5oraqNcXFyKXSKWrDckEaVLuSTrCrPRhCxZY83ENsrkN36qmzgsyiMJq",
  "key8": "sy8J7PVG9XBCiyo3oKc5YG4u9ebnbxEqt25SraoNyiJUJHHVwS3iiJ1ForbiYTDP8ANXYiKDKUCE6GS9rWpqZ8t",
  "key9": "Jz3UmzP7hoTnMrMnaij2KbtBh1M8PwALEp7adSnJR6NtwmhpJc1oeLCC99Eoe9DoctADnAKvqp2VG1bWpHJ5HQH",
  "key10": "2GwG6K4sVM1BbgLNscnBrpQq68P5i9pMwfYk2yVFp8X9oZ2ADVD6zmWYGrG9sqiFTvurfNBaTX5ao31RmCpjwZd7",
  "key11": "hvh2ovzQQjAH1T57SYTyrYt7Pkhbc3d4zYNw7nBdaSge8GaBakqUFz99h9xvqzR6WeuvuE7VCn5aW1dCscdQVgz",
  "key12": "Vd92qio2nEGgQhzf2zVBNBvvMnshtJzNqiqG2o867PLvf23Cp4XDbzvPaS2mFCTKUsMpD2Yq1ztBkLNmgm22Qa9",
  "key13": "2F9ZPkhxQkmG3kj59bii2vwpv19VEr9dW8L6pWKpHhtSBh238u7Vr9xEaXhNEK2B9ven564HJtTfp7LkFEiLsJJk",
  "key14": "3LemxM1zbBq1CqSe2PjFam3KGQTF9RCW3Gz6p3iH8QBxBjYtQwGeQmbmJFHcagBS4uE8iPbjo7CxKYJdyQV7FR4G",
  "key15": "3dbrRsecqfNgekd4FskRhsm2c5AEviPSJf163MsciVHfz1TvP8QBBCr44ZHUH2jsvTkkTgWhPFBpnzUDbFMysR73",
  "key16": "52U9wcXZWYAfWBNc7J9ncC6CyECeQdZFSCq2RbBiJsx95Gjz9pFaSftK2eWWe3izkqL1UEATfgMhWFTuZYCGHnzP",
  "key17": "2CsocPPoFMU4T9UHsp9GFjW1AYWCbj7Nysbygovswezv3jhwGNpPEWPuyJg9x1R6cJXjQ6f7dy3XDtvmpGHJ3Zbv",
  "key18": "2WX1P9jrZeYbM5ukBt3ckxNFyMxW7guA1YrV8XUaDv2RT9t1oM474FLMjBKynFLTJeNw2n8n7vY8c3icRHWgNTNq",
  "key19": "4UhWT6q4DsFGC4vpekyKQ8B114KNT6HN8xoaqxGGjjtSq7LnFL3vjK2qXtMzQdorZ4d3RT3Y4TvGTQwyeXo9FHG6",
  "key20": "2p8ihC5coULmfvqcd2upjearRHe5S87Q5xCdH3MiLut7FA7LDuFw5quvsABy7UrTpFnrdxSJWoZ8Y27ks61F1QAF",
  "key21": "674QRw63rLboU6u6NPfKb1BA7ihx9kVkxRA6tT2CTWRPjSmfjL3px9j9tpmQhEQ7a54djEdxckT6pyPzgXoKx4Mb",
  "key22": "2tNFDtxjP3drmXhxWK2wAUHNdzYA55e5fpf92KL2rzoqebbQqrqJm1c1J2ZERqpKWV2bBQS3q2awhaWdSAD8dzhm",
  "key23": "usfK2JWnbBhwoTyn83HVfeojJjYvE3uoYpCWBwCuCbDCvsQG8Mq9ruqP6b8yAmxyHssDueJvRkJ9Bw7VJqp2m9i",
  "key24": "2KFJZswduzCyZF8hmxN4UkQwp9SjcWB4FuoqNqdixYeY36U1myPNiJ4SVK2vrwsNzi636okCCwdQaeTsZBn3ZHdy",
  "key25": "pqThEAeU8MFraeVEWJHgnekkKWbBh77Ruunv2UKM6UZdGX4afAtkVotFwJ3J4noCbjAdVDEqX55nuoa5egimA6R",
  "key26": "5As1RZDPW48ms2wVJTRHDsoZYLEj2tXnfmYRifzgMVXjiT6DwtFCFjoAMp2d4DHjwWD1drBKrN2oB7vGzUkug2Fn",
  "key27": "4sob6tAx86zhHMDGqLkhzpMPjHL6S5AU6UPZ2TSLRtxBqVCcDQo5sG9Np9EsG6QeYX4orNHjjE8SmyQvAQEkkXEg"
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
