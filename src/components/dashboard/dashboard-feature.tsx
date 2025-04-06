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
    "qNgiQ1DycSLHSj7kYYQV6Du6A1JLjUvXNp9ufwvsYgpWWWqSnnjJGf4FnyTg1dFUXHSKnEp8BGpRyNwAMH9UqTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5agcTcNnLMFQKbAth2UjuzqE6wX5GRgFwsbntYbP3znGZ8zjp9XK62C64bGAsnX2zquaUZqjzaTJT7aAcTiRKdmB",
  "key1": "1iNA6PXaS6JkNE7ZQUMkB9muueA8HPQTgz1bFNP7D7Q3f7avsSwufHjQyY3x9f6va3ySMMy1iexphnv3g8bz1RK",
  "key2": "6781hAc9SL6oGXLrWe1hhgBiNm1aufW99455a2tbngnypPpoPLdwppnJJcbEkYirba2w9cuunQBq6MmtEsiRarqu",
  "key3": "5GUt8uCTZDiTZTaD2rdGx4tNwMP6DMCx3TeAjcUje4vUu5oQxBouYi5R38NHNFXJXTm1FMm2MYGr89E3kDxW9ETD",
  "key4": "2qyoNhtyaLYTmr8KjhcxaYagiZApmpgiJCFsnxd375n89yNPAZsHV295EThfqHYUP27LTG4xNdmHQ1GJU6ktv8xv",
  "key5": "dkkKgociLUorY5k6q2TdFPpUxHF1AwgV8ZbvD8svNtpuzhHkgEGh3ZMdmkvrJ6dJN8qkD1PtkcdqwKcAfBpryNS",
  "key6": "2K4hXn73z21S8LUs3Ph5qSrK95dwNcQQ24QaGPW66GnVL5YVXaFezdHLqdPMDAMFbkwJWDrC41PB7dByeYLLUsee",
  "key7": "P24gPRezBSenpK5oRb1K8PAmYP5EX95BMza69LJEsMYBsTG9oovYqSUaWGPj7wp315msKtq4YihGYn9vNic66mG",
  "key8": "pDmXJFzhbmPtaJauNcPzw9puy6uy6WtVBKgRmcLwv1PYqvKF94EwJKB6KG9uCE9TKFGEYSZnLXYTAYhb5teymFb",
  "key9": "3uMBjabzDMpwB5QonYu3aRuKJNXjVGxfQKBrvzw9eNvu7iCsMkk8a7VV6n7BhFrHEZbf8QfULPwuaCJXFpCEgFep",
  "key10": "Ukoug1jSTeJSBz5ux4i7azncahVfCwyr9ZiCGe28pWq2VhaggbpbyQrkPHnYb3G8Bs9HpYJQzcaWu2aFySRQEYN",
  "key11": "2aK5m74CyUBpYSJqr69zxtPkb9Jq6QebkTmzT7r7fw2g2BPzRgRa1JjrWw2NoEY2gj5thX8WxzK1Z22haqCMxQtu",
  "key12": "2KQ9NPgwDGEdhTkpSs8iAzAcCFixpUF9yEPTjt16w9qfESntSbWjepqTtNb4kQ4ozCdcUDzF4HusUTXJPjmbbMHa",
  "key13": "jZ5uRnGLqedJASSiKRKW22U1rGW1UwMHfsbpMNkxVTem5bdxYjssF9cRhFikWQTyqP4AbgD7ykMPGpBgUV9eyMS",
  "key14": "5GpRDWMdu2VLusozM1JEb1mqpm6KwCGi8sK8Aem1ZSHZ5C6hCZ63E8BGGpeeb7N9WfjQpuMHerS6kCD1NEj31KH1",
  "key15": "3i6DpNmxxNaKtzHncyQhhv4aeASghgrYLbS5Pz6e5y1uD31aha1yQtpPPWbVF5WVMD8KjTLaxYWwnDnmYARQRufz",
  "key16": "2JD33G6MQ1KuZrYWptXfjsmEsz8Xc4X3CRBwzHJuxFd9un91eSL3TtEU1hxMj3LZQXsDgmxmPGFpC5s4oP6Ze9dA",
  "key17": "5uDm7gTur7zpPB5HgCPf3TsA9878jxxwbgcLWkT6EeMSQKAkRg5xLJSHSddYYCE5M2Mqy6MW7YUz4LBtvf52fTou",
  "key18": "2ZLw74sDD451APWGCVWLdFK94fGxBVitdNFTxm1PWoPjVZTzyDTLKdEjR9eTTBaXULgNvP6x74ZsJAEHJN4Y3ahT",
  "key19": "2UkJuZ88sTTaXHtfu3Kxj8VqifHTADkVLHfJcQ3GG2NtmwttTo8JXA2zD87CdsxRQQ3s6thzGhN5Bz5iZBHCwfEi",
  "key20": "bEn34qacQG5Eyct7JQgyh8f6nZf6YcWpvWHnSeMrtqi3bCQXfVYM4a3L6u2kUHTJLwY7khi7XLHiyuywEWfGpKq",
  "key21": "5YPQtQnHY4pXvc9cuPSR88iXPRS9qSwb9QBQPxUaAi2pL4Qo5wgvY2MqXhvCyf3ddjHHzKP9ebzJa1VGQZbcrUTk",
  "key22": "uaYwuFd9V9TwLczphLQv2ACkpfjv7svn7rUY6RZSuBERteZFjsYGyMG13UF8fJVMFwgM2tChEk8GE6ZgfLcTQX6",
  "key23": "5AX773ZeYb3YR5tCtFzFXHbuyJhNrWJ8vN7k57mRGE9wtPuJ19bEdnBMGWfpTu7zFNAGU8TV1zkuVqvn5svX5bcv",
  "key24": "v74z9v2B2fdvadwA1NFCs7y2GQrHMWp7rzVkouqbF37ZvNnREVtHBiX15eQyYwGGYRy7zgk2MXX5SsXRBzGanR8",
  "key25": "61G77ZgQzVNHqAkzw6BtXEfauc6XnPND5kEpNfTJGa7CKcMDLkF7pbXNDDL44ehafjCtnykVuKzskBZAaTGkVZ8R",
  "key26": "5XrCA4GznGnBhNSMursdhkFSF3iGPVzGGiMtG2oi4GL1Ei89jT85HAesXB1yy88TE9aXrr2WrebCiXRGu45q9Zwx",
  "key27": "4UioWe7Styq9BKH2B7JsZGqYB5gN9V8YZgLUvSzoc2Ny9M1ujLAmyCLK6EaqoVBCXUQZ446RaXxh1eFinnKWRF1H",
  "key28": "28v1YbrXwiAZaFWvXPvqojAyEkdcycsjqzWLuhEu6JWuMNHsZnMwm8eQJbDF3QvdUYc6ieov23C5iAAcR3fchtNg",
  "key29": "3YpHhhYouCf4C2ArhTMxJ4yhqDW17xB7pzRH6aGcTMopQAZHGCi57fv7b468Bs45fgTbK9QgtYsRiPFGkZp5NeN8",
  "key30": "2bvJw7rbWUj8DNmMTqUJLXi8rd77cvpypBXmAbczQjzaCWUS2JbZM2zY2McHaDPRVSsvny8fQGfYCsUgVEytFyHD",
  "key31": "cbfnPKDYpGoEHM4sk2fUmvYxt2rZMxFqBGWBeAw2UqnAnivmvGTQnZd6zfCGgQXSnZTxKyr52mTDPq7zLYzx8X8",
  "key32": "45TEJYFDZ4E1mdkpEGxZJhVNo9znLLG9czsrHQ7BSmwAzR4NC44aaX5W27xR8Tapv52c2rpUyw3VcKP89rE93fRq",
  "key33": "4qBLxx83qDxJJEMefWMCo3sXnCEdgqmgHNzWLmvqo7DU7mZYs5zYZZ21XFWCyTge4aR7UaRP6kY14LDmHgrJsEyC",
  "key34": "YTLMbJNvsokZFbXgYBaSxg3dTwETeaqcizKvsvZD2Bcci1LCPEzUUd8UgYHJ3xhLTWgPAPeHFiBpyf6PAC61y7v",
  "key35": "bZNvbgBqCzCoytkVQr4QKRidAYW6SXzJ6YhtopfyCrzXin6btYu9JLDQm9r7ibuttzRmdRBBXk45QNyuUMSqFd3",
  "key36": "63a4Govdo9h6UaVmoxS738gmVi61JSPXypYEUMxrHPUCHpEEMmNV9DXCN1VTzhfV1HdvwzLkEYx7b9FhpWvfB5Sp",
  "key37": "2kkkLLJjp2JzFWJKam36231s9n8df6ZgWAK2W4vftmgMWQny8rQ9w8MiVLqVQFmtP5jdmGXtenKTbTKBWY9wd5yZ",
  "key38": "4SQ99CzWonS73x3KFWxC9aBFNJuVskz3Zk9WnAmppvP3bPzp6b3D45wVK3r3aP7VzRTLYWxDqCE2c9JiEBNVxATJ",
  "key39": "3nYVd41j9cN482gBDCZi9qk8n9nzpcm8VxvTkGP5NtoLY6FiThPgBNrWUx1ALw9RAidYUbFQVDfC3neFQQgxq2Yj",
  "key40": "2yXRSuQKuTyzbzv1EUESJ5SJec231xEXygXx3NfAHM2osuA4ce9m3tSh6szazrrP583zgWaVo4VMD68Q5UR4dxyi",
  "key41": "wRyJaQpHrDvtbdJgKPm93qqTX1EcNkQkcBmFPk16dpStsPxnLxhUd56rnU5rc9pRnZQTgwPoEahssgCXK6jiGAu"
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
