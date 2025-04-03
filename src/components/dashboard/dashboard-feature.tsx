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
    "4Ke5TA7bnPEZW4DhRueNTocf5Hoef8ka8oBsMwxtZF4ZYDcXLfDymU8vL5yRpYHzSbco8YgdKS4SPiRJHRWd4NKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WiB7rSRdD81BhmZoG9AVnevXya3HJsbmKuWMDhW9FrJ5CUtURFBGptLDkm7Q2PHRZsDLs4NGMnqunQ8792zpiM",
  "key1": "2JoBJadngHetZ4qdvZwnMWDHPLPjENwvnmdsib4VivzGRuhiQJfREuygupdm7fQeUN9fbATY7CycsqQpddksgQVD",
  "key2": "GPUccKMerwn9QRehrcff155faHo9y2Nz8rLiFrPk8ZUkRGu5JC7crk7tQW5AfM6a2GiwsTZ4idFpUmbAvyxoJQp",
  "key3": "5MsKPrpyoKX7ZYEbx1kTRJkM7NjqDoSdr58ytEVt5585s8vCfhunZTaKX4DMSnSYQGbFT5eubhXAVU6XFpEg6jyK",
  "key4": "2p9mEQBtsL4Nv1pByVpjAxfrDKinwSTVYy6ZRmiMTQ8pLcUGhvVhxENRn2pPwZfdi4HiANFKy9vjFpvkMXMZ1sM4",
  "key5": "n8Pq2NmCmLxE8WE1sSob5oohMRkAPuxSgKZwisYjE9ozzm7cp9UFsynfBouqwEigqtezYCuqGu17ohgkgMzSofx",
  "key6": "56nbESSbXCxfs26AsimfcvswPXF7tceYsZSvxgB46fhbsyZUq9thTnkZYy1cU443rQtfbQ4zVk42HC97z2bCssdQ",
  "key7": "2LaVsKGcQV75fxr7rUVBrpTGMHbEK1iPiFtieozqFvXSWXm6bvvL6k3w4emJkUTsd1epwW9AZFjM5EuganCAYXGL",
  "key8": "4g5EgaL93gUFjfcRrv1Y8skK3K19MgtzgsXX4DhbfzytL8esRyPXpaGmdt95iiuPUhFjFvwhKMncKzWgasy3fUEu",
  "key9": "B6r8Dbgjuk58aoRZifdgtfnUYSKedFRzyGnBkKvFQWyaqJ8g7RC3vhadz1x8aZ9yvgdsQUP2kzVvrQh5zwS64YW",
  "key10": "5H1ZfpK3efRuVVcStPAqnKBDw1pN75yBArz6xHayX1vGUTQjYCGs1yA3MjpKVhYkMxvNfvvJ5vrSn2dnP6VzaT7T",
  "key11": "4edUSZz3JYsp1MAK4ZkTD6BpTrQaXwFDPGG9m23fVu5VEA5hYrXn2CM8nncmh3wQgiW495aoMDdmvcrjxscFCabn",
  "key12": "iH91Yyu6nUxgRVfT9Lt6Jyr7MDjkxNhYVn9GSKKEj4G9sqgknBuaLYkfWjmvwqj1zwULPSMgM92npUaKGbEWpsi",
  "key13": "55m6fKEmgUkoYW8Z3uKGZRyCuWeFnr2V4nozfmPGeDMeHrbRw1ARVyQxy73cpjdAponYvpijid1HBMWUqp41mjiF",
  "key14": "452WMZzAiuaJfs1bUYAC6f8cpAwbn7zThaq11KgkARSDtYPCcP4SGTH4YAYdZnZPRLqtfPHdG4TmELB5uF3fQr5a",
  "key15": "5iXTonaBwh4ShCSXerowPei2waVi6hmX1X9FHE9PD6Mrqq7TQhZ7uf35mMc9t6p2XZyXQuGxe5fZhCNNxPn9BPZm",
  "key16": "4DxjbULFYH13WRtnMqNjnU3Jjf5PSDgaKRefRYvkXCorbtxxzZhmttLevxGpo4VDKgU1P2o2pComBfSk57MMoy3p",
  "key17": "5FqFcWzb1H46ErZf6BxEQ3oV9d8aDXS6kwG7MJdkbyCyyomc7oNkHKuuXukXZWGdk2Pz81F6z4aMxL41vVQHAJJ",
  "key18": "5bW6FfxPFZA4kdrfsso4CUqUocHKDs3NpuTtT7zgvvC8HLCQSkhRit8Es52FKFuSQX29cHTwa6htezLPF4wcP2C2",
  "key19": "27orFNJQAzbqitd157iBiUd74gQEMaFjtFEzzWXoXzVn6SEqnGxdSi76kDgapQTj4LmNgTan9TtuXaEoWWsMwyYV",
  "key20": "3KHewtoXjeZUMbD8GnoTuAi8Gxas1CKrNxsown3ESJJGwG4f1NGdccy4f4rgXqzbCtn7SiMnpEdt4DGs7yuaXWij",
  "key21": "5PpgyENPnXMDeTfyG3UMQBAhqax4nMJR49P8rqCR7hw5pDjNHrb6TUL1r3TRMu6Ewi9QpPLicA1xuUmDPThK8nwF",
  "key22": "4cU27MqHgnhCTbc1sn9jHdjoSXbUG5hRHEUP616vfPwA9upLd8zy233EoL74pi93KC2vX3KDNCYr36XccxqP67Vj",
  "key23": "3dN4X1PF9BrkUrix5DYC96Cn86qZERcbbU8pbbWj1Af7CUChXRMdzJoSy6kUa3LhY5re7vseebKubayC1u1dps6H",
  "key24": "67dLcDqury1fEhdXRV2HqAhXjSkjsob1X9tDPCEXYTFeA7D3Mv8ZzWmdb7Tz5wRyAHvcqr8yekStn8DLEiDwuxfL",
  "key25": "4dseGHYsivBD2TagwjE48fhkdRDiB3KgsZD7VYq6qaNQiuPKXkudqtSVAzwFP8oVrPv7KVSn6L3xyPQr7ykc33tv",
  "key26": "6Wipzsd88vAUYHLzpoVkAw9KYYRdnSAViVVRyFY4Pn2QDk5dpw68vYkoHXBNyCXib69b47VgxdcFxQLyc2mz823",
  "key27": "493pCa36LzZKEPyUgYrgYBWuKAG9HsnSapfpEG3wTdBQ4nDvhkZuvpoTkXTF86DLYwuavrLasw4x26a8BonYaZJu",
  "key28": "55X2g8xmqXPJxomHWYF3vvqR8ron9xSEFJu2eAakPM2jLpwxrg6WEbBfE9NFNdnRad6zqrk4dJMn1EG4qfp2RjTg",
  "key29": "5SPpF1VBjmWeYAfzHR1qf6uQLk1C3UoCxbcFdDeCAmkj5Xbqs5Lqn9oBvxjGnGJ1sdNKaNaUiS7dvsSWr1nGVFd1",
  "key30": "4Mg5mK5F5TDBzkGqdjRy16nqAtK93D8LeAWaiYcpoy1DEgRDe6ADbTk2DLvWsZAJcu5sTXPVGSeNeLPSBMiUXDXU",
  "key31": "2Mko3NiVWgK9i6AtrVVgSb3Bzbibf9hBRV7uettXDtWyYzoSZQ96F4adK8D6RU4yz13XB39V5QBzzX7Kemndrx69",
  "key32": "3z3N7VBjLW5QRCMfFvmoCMtVumYGH2Q7jhYmdyn9FYs89d5TiVSpa3rSuHmZ63qdNT5k8ZezUe3LpBSrXiPDh4cm",
  "key33": "5vud2Mx8BfeNzDhUJ33H5gTwM5X1Uoic3m2r46cZdCsEoj13BrDhCR6YuFcyh3eTmZsPc45nRdoxvpXWca5rcqcT",
  "key34": "4XUotCErXW477b2sVQ3xNYQYuNKe3hTtMWfc7sQEvCT94FYZE1yhDLXorDnoHk1RZiVThpfX6rd9zXwE9tiwCzkN",
  "key35": "614NXB7YogQYji1mYE5wUrQy5yqU948BBEtYq8uJz9VKuQsrRwsDBZdM74WaBFzi6HGVWcpjmekuMeF8NmYkSDm",
  "key36": "2JpgpojS1YZ42ReZJZjkCgcigJL9C4EetALzPb4L9qHJZ5qsCj6rYu5Xa2qKUUNebfvEc8mRiUEDuHTSEzJMAKz3",
  "key37": "2RLp2Hzf6JVsGgrygRZjMMczqiWiTbhrmzogzen4LSGzt5Jrj5mC1xmHrHyKJwt5Lez5VdbDyLjot3yu4iTo8kwv",
  "key38": "3VTtRhLBfUcC5SfKPPBPQsk2ZpsKZMvQouqxgeCwUGqLk2fmDGgHSUiw2ZQBqHSJES5oCokKNrRduZUqJs3fwZRW",
  "key39": "22QN2cUfhKTggKHmUyB17MDoZZgUFofcRFocRoFeQehN159DEMVzCWSzP7ZUdrKgySx2M9hqCryU4Pg3XsAC1rwU",
  "key40": "1q45mc4UAKp3bw2WSQfKiqGCRFnrUjAFiEqwLZRaFUxdNgwMc7dWPhctSz9Ty6T4hmDEcX2WBe9NGyAN1Mx84K6",
  "key41": "2zesyiFbJq2ccZcpdUnYsxeeq8EuP4cdA9TEhtk3crynBNVj8CtAqVVWzED8UEDzFS5pfahf9qZGZJ9UN68A1tGQ",
  "key42": "2u4wweuRpBdy5o3rGZXGxhVDfwemoWNCbQ9fBt5W89ChwSm2Ux4oF5G3YwTZHfxgFGgZKVVRZ2C3myb861XAR67m",
  "key43": "QZ7yVLRqMFiy1LdVfaUHTNhP2SGYvMsikooYYzgeTSsHVPeg8eVQjH5japmE2bDVD2eJ2CtPQNniXG4vm4rRsis",
  "key44": "2hXuwXH9hBzgyjnayZVLgN2LYdqCVgpnBUaMDNoPkDLpG6c5QfQMSAoBPCPZkC9ohsiZF7DCfGcWaKkrBwrEZw9i",
  "key45": "5WAc9bmHFseQR2FopcHQtPf5SzMehV7A7q8Fr6XajZ6sWnD37zHSbjYUeTFAf3S488mENMWVEQk4rz9YrCKQXH5U",
  "key46": "4jrpiUWaeEg5c9ZY3V1N1zeTXFoMZczZDzfFPNCp5sQ7sD7ZqKJxydmvn5NB7W6oGD3LA61bKyWoYZNL7d2s3h8p",
  "key47": "5P5HHEtMiRE3UiwnrULgjpqWTZ4JmQgoW5oexsBJ3YmAtFTLPd9FSJrgedXtVYtT8RD8cRfCCdaMVrQkP81pUY7F"
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
