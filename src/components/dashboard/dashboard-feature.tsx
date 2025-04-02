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
    "qBG7S3uTWH5BrccFyWKvZ96miD9yV8ePgexcc6pydTvS8NwQDGRn5p7u8QeGgNCw3XxGHKUBrs4fqBJgbNkwL3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDPr526Xz4yi8TZD9t6XXAybFjv5DFXeQM95eoPiNc2S3ugtHLfZDRFoEKe2nCcZ3NfqwQUiff9fx2WhYpu1nNt",
  "key1": "2p12z8kvpbTsbyCNsh6kzU1DxVkdYbcX7S3Lc2S8Ec2jLa4kcgGfoFFhZcakw6A4bYvqNRzd1YFFYjKwhC2AXj3c",
  "key2": "3vQWJQnCzni92aCCiTFsCw1u99NSdZddrDn4YNL86jTBxh7LU2UNBB8vxg8GTwopSNvtHovKZn7iSAS8T7ZFpcEK",
  "key3": "x4t8v2mb1yYHDx9kT7kXT25Gjxh1EaRGtVCXrGQ9SMAf7tLbTa5ngw6t4JwQX94tT6ne55hYpzgkCBtoGNuPDgC",
  "key4": "zBABBsbPucBoVuV2CGTQ4DVV3uRyrQEqL57Dc3F35y3XGdwezjgrrq7ao6dyUQgouKTyu8o2gZMDrhvKGCFpXnh",
  "key5": "3jvUGMLnXA2PpcobKkDg1CXALsYnvgQxyfConw1qLA9odQy4tUMvxiTARryaZdHt37Hq14Va3zsw1UwYgGF2fL8q",
  "key6": "2VgTHYTyMjDuLouKDxt52iz2NwAk2RXbKb332zARo4VPPQf1sz9K2QK1xNoRAwvEJ43P2aBZgstv5dp71WF4uCxq",
  "key7": "3XGF79upRas2pgD6yyMvZZQbHpwb4VmUGWyzdv19FjGoZT6sy3dDMXyY8jaK39WCwh5yW5mRAoCKkteZDjYwKsb3",
  "key8": "nD4XB1BPBod9bw3tX3tx2RdADVJ5Ftbe4wNU1FQ2eaNj8BaNEvnEHWXmVinyx2sPQbGfa2DUEdUkiZbD2y8TTLx",
  "key9": "EsaoYpjNKQ95qTV9bY7B8xMJhkSrRDCdsDhDWt7WiB2W1NKqN5ztSzsAuS745S3bXTRM47dx9zUvtxWrJRb9sFQ",
  "key10": "2KnTHJNqMa4sBSFnG8rKBceKxsxqGJNM4jrhJKHu5BRb7AGjEgCNSUqv3Us7FcMocA1cPoZxR9D84CbmdkwH5QGi",
  "key11": "3BHVMAV3jMQjSQ2sS2Gq6KgXMH5ojY1FAhFr6N2hE3JK6RfYWkLQiUsEhQntVjriTJoooxKeC7AFeYkKpgAvVtQE",
  "key12": "NZ7f8nB95cpKuZJuekTeCmAcgi9LHVHwyBpc4PjGiFXniZQqoGDo6u6ar2FCKVprQQdqRoV3wv3rBhoEvoHWxJS",
  "key13": "2n4xMW8ExAsrSArE1a96Gd4MKLqMifofV5uT48UxYPfHnBYMv415vdeqVPPqtoJsHxHLQrLgMMEvjZxJZFGRNBgr",
  "key14": "4Sx7MhquTFdtKTLmnPtyTP65oKrBrhZjm1iu1SVtwJdhT3d3ZSC7MXSiBCSzp7izhSA6mnfCpmTmiDWdCtZk1Bch",
  "key15": "2wvZXPBW4r7YZVmLhveTKEX8tmSt8z5Eg5NAVHgBWs55SjPZb24b7KvsJh4qRqBVYtRtvg3B7fPFo6abmiYax2Yq",
  "key16": "5PJTzsz82KKT6nN4nK3WcYsx9MFGkzS7uwRvATe7VGqUFHvEVvzyKNqXnZFnFJP58owXEsuxjEWbknQojMzWUgS2",
  "key17": "2j97FuS5ssH7fg8Zpvm23ozQqtLvpQba9A46JXW2g8UGL9wXNrY6oYFPWX8vBjeZyvH4Tv2QgU3MrzCQBdd6joMr",
  "key18": "C9VVMDFfgK9Kc5GJ9Z9xeBkxp52FZfDBKhaQnX7qWgHkEK95MJ88JjRUxv1MwtNyAJXKPk6fpp5x2S6uKB6wf3Z",
  "key19": "2kZMNi2MZyVY2D79anZcuHKrgeo6CtKd6n9yooN1WPcJaW5EeFSn5367cGDLH2w8E4WtdTQKoX3w4iMZpmZDphTe",
  "key20": "uNBKWyH9C6rUXKrLbS9V6BrXnuAHn2pg5V3VmniwTuUdTG8sHU5dgTopKcMQsmcfY7b27RkniWDXjGF2AAuq5WK",
  "key21": "5d5TvvNBvwcNjebEk4BoYMixaQ6j4FYwUSijWjw5J8v8Wvins6vKimJ4wq84gNMshVXDfopVUSCjgZKdcaf9Um3o",
  "key22": "4Cfc2UyxdMwjFs6ofvAMDsxUttu4HDQWj2UVhFJC3zPKntADP9MA4XvfQwgoVinkmZj17fAtUZCR6KRDcV3DUHnG",
  "key23": "YBcUinpHo17D2sZqms2yoT2XxSaN5nEgJCeyxry8wgSb2qkuZ1ULvfGSUFzLRPP8GUSoHYeLVbrEzVL6rFHtJ9v",
  "key24": "HduMMYiAJafajZpVMbRt3hzQmptswNMYRZvygGbKifwf4CK42cJcmfLjGhva1zfmZexFkhA6xV4Lx1C1AFQ8D1T",
  "key25": "365AWt1aj1RpT8DjMxAPP5LLTN2EdYJmkeQP5rzg6nF9JZLV1gUGzXppPJLmB17VmujdvfXqxfVsFGbVeKBjDtQb",
  "key26": "3YEHndzVh8f32UvxixcU4CAJcYG8TZJjWTDd7bJhLJYPZUBUSpfxTY3TBZErrw6VUn9jwzFrhonmTULZgrk72tkg",
  "key27": "4zKYTGNiuuPjHGNYPUrL1aFqS5tEULPwhYRPv4eJRNNknWgPzeUFEc81RPC1eQSZ9oLbtuhyjp3RDVG98pUiuHme",
  "key28": "rUe2ZrthxKJM2ZCYdYAKTVwr3d2TiXbiCSFwtixWmHhg3XHzUbwBLjKHsACL3eRpJmzydFERUQ94D9XXUNcuxoW",
  "key29": "57qCJt6DM7J7g9NDFbV1C9PBSF8t5QZSzkMypGUjdK85znKGtgdYGuvV8BWHLHg6PUgNwTi2WaxzutnmPxeZ61iv",
  "key30": "CCiTXAVswASFtTsYKUhjRJqbzxfs9Qb7A7DNTrifxwWdxsNGnnbGfJkkUDjTyxnNSKH3KDqCX84N6CM9fqW2CZM",
  "key31": "5VqM1oWYDCfyBgk8XLNxcMUvydFpxpdPWFKM1VRZdJEgQocEvUc82hRKMY2vKHRL4fYZXcFcgmoDr8vTUEaDeQqN",
  "key32": "2nMkkw8mhc8489joyew4Lww3ntp1etPfVVBFNtBkma4t52X1tEjUcMgmcZ2wDxFGnp6a9N762gizJXN9n9BV66T6",
  "key33": "Y6zUN5gKQ7bdMJcWRrDUuHSY1tQH1bkUy5rXfnYCVpjdGYs2MuWYGeHDimTPQLfnqXJxVKYoi5yx6VNq9z4TeEu",
  "key34": "5J2PBEwfaTt2cjMB1iMZAHVAgrChHW4LKCM1sgYWLvjesTYMUR5gWvByVNCQJGa3fx6kLQTaek3J48wVkgmR8V8M",
  "key35": "3YT4xe6CepHoTiuN6Dv5G3xKPYGScgDfL1PWVwMAn8QrtFgSdMzPhKeEzAqf3YCcYyBkFK8xQsqdo5fST72SioNr",
  "key36": "2soRPVoPi798XW9fNaw8TUhermH3qo56tyRQkMZnbEd1QMw3DU9fReruWzrYbb84k6rvxDjm8vApVbeAVSjcBE5v",
  "key37": "3RcEpjdo4VqkAmJVVgqAPDX95rywqRAieRxKHX5XMxF2vJ2JY7JXLRyKSQvZMnoTfMcJ4LFBGsCPuS3GoRHRSj3e",
  "key38": "kWRw8PfW7DBB2Ew4muPedHaermyCP1ZXbCecp22YZfZfE3Mwya64D4tmDm4pENrD93GkDHvvgK9631hAU31i4zt",
  "key39": "3UDYgMYqrAydJXcuGLj1WCQaJ7xNdWZWRVAsBNz8RHkwybEWSu6PyhyUNRtmQjwpRuTc3xwVK3DWBxxVe6dKtKSR",
  "key40": "2NSa2fayawsw1VmtWDbaE96xXCzWVBs9VBfhCUwf7Tunkzp9pLKaWMht6TbyppH2Km6YiXDD4Fdq8X7wDUvVdEkH",
  "key41": "5H8VUPgT4GQHJnKvGkwH3eBfDE7RxmvMDfwAmLjZn4fcvNamnhXUN63s7vJAwdyLKKBjWe5uar3Bu9vmfLqW67oA",
  "key42": "4f7WoU72H7C85it5vu1jzLwVqwt1ySWPh9HJdNprFS2Mc7bSUkJAJwqmNqm2LCHxUCBwFEmB6zWiLMYhLpphnMV4",
  "key43": "5J9s3zavfxtfePWsiA5jN9kgtQx1ZgngwFtZG7JdkY9qAhJSr4aLHUQcn9GZ3TXf2g29SbWZTTeo4gFVHZ1qzFaX",
  "key44": "5w8vniikAsq59ycR9ibZWmaisqxx34n9cX81wEztGkUbM2RWzebeExFV5cok5MxQ8MD7XrJHsLwkU2B6dJydFLHm",
  "key45": "5ASQLAqHp6BUzzG2NSAb51j6Cc5CyzfPhZviCcBTo5JAW4oV8ZP76qWq4iqW7T8Cv4iLByDWg3ScBm1gpzUPCKPq",
  "key46": "3RXC4AV8seopjw2CQSyUBmeXzqjTtFJzwdgkUdiAaixBsdP8NjwsDcF7PeCnGm3nYU2dNdDT3MYPY3KyFrRxvH65",
  "key47": "ZDL17yBbdqCu9sT3FRUhMSRUQRbUXA8HzxPmQme9Pg774SgoucVtWWLt5JxehrcQ5bd7oSqhRQNLgxccGXd47XQ",
  "key48": "5Pf3gKq8ZmKpRL6KbureXV9mBW23Mk7Mfpi9NW8MdYmo3FUDtTUqkPicisupGtuck8qVvhNqmBzBQLdPGK1XFcg8"
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
