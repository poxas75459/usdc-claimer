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
    "334AhwGQVeak5UVcDZ8sKoNce9XvuE8NC6C3LSEf8vb9waP85hL4CkEHBKuGiEZNUkcRh7k1zzSvrDfpBkCZUEiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Tnw3BCAVkZUm9i9jSDxA6sbodSgV68W7NM1qYR5nkoHGcgDxzPxjGqjQpMLfHLbdVDXL8yWwabDtbhn9faRzZF",
  "key1": "4TerfQzo6P8AK2XoWxALb2xCtBjyAUrKvxfhf9FRoV3V7CoDUskNSufSK7SWjwWsogmWJe2dRb5DYXMgH8QxTZ18",
  "key2": "D9amaBSWvLyom8PgDLzy3X53E7kEA7KfHLMtjWK3oKWgFfTJZ6w2FQuc3rwpdLjTEiy2svyrJRM7PQajpg235JF",
  "key3": "YuF8bV4NEz9A4w2y7up7TE9KFJ3EZ63Y6aM77afFfvZKDYpbVmkPvHHW2BGaphYoFLF8axx7DGpjPP8ZC8kEyxG",
  "key4": "5svqDA6G15KneHyuqvLuXA3gbtmek6V1434v5h7baBbVdiRUo8TVtfG2mBjsTZheA7d91tENw5SKGiJpgKL3AGSA",
  "key5": "3ADsoxneUEabL5rBQtLesKHBiEw8KZ3eDM1YNjLeZ6Qgx53yudLoQaWQqLpNMyZTDu1ZD4A9W6VLYfcScs7AWwz8",
  "key6": "h5vcjzMEM6nGS26ziXn9rs8LXx2aqx4h1vy4Xhy4B2vhHp5WyXxC3Aj4iBAhTGHo3RvXBjWR8j9w7MCYNJ8jnTV",
  "key7": "5mdYPkNRqUa1GQfi4RTGYRwXfAECc4nh9P1ngX2dBCAqVNakc8jXDQmyKRhaDMi96JJow8wzLap5BSZySxJtJVm",
  "key8": "5Lv9Uo9eqjJcZY1oBeCDigEYyqSdTkuWqBPU45iQ7XPa9H5PJYNEVAdQcXFS76vZCfnbkku2MNeLUbLywAnZQLK3",
  "key9": "5zvMdvVGQnYPxJJexPk8JLvi6G3gK8wxRBykokyM9RHFZQxnQ5sKmcvUXkraYDqauYN8ypCtioXUcnWMFJekC3Mz",
  "key10": "4RWW1TC2zgaLPLJpDoEWszUPaXKiYUZgyDxhfzEemfKiuriZxtGvx5nEADeLD9buL1njuqVA33zXXZTYWTEFs5w6",
  "key11": "4KFpLTkCT14Gm2g9PYqjKJ7HS7U5yCWpKhQnyptTrGPZ5nKNL7KaR81iqKjcx6WafVnB7Lneb6kodkBmijnYX5zN",
  "key12": "4mRgvaGie2KDwjHyxhz3inJro3L1bVxn6v21DoP4rCiyRpfj6RcMXeC9LbjjbCb28gq5CtuZ5vLE87YvhWzianZE",
  "key13": "5rGR74hKv2KBdJKDSsj9zk7suSEESS1JDJugviPv2kfZdasp3SmdQ8SKUfkVZRYaJERdqex2eyCEnyaiigHKm8nd",
  "key14": "5P8eczvGHeC4Fk5hcKKTX4T2uRtSweQN7hsg3xpdKbkddDHCDQJSWYd33zQSwmSFq49iur3CMdJcpEjesp1P45WG",
  "key15": "9Uc59yfSC2dKsy7GY2WZk16xZTfjADNDBsoeHsjKdjeEaUtzShS7CPnMqVtKrQ3ZX6aTPdBn9T7KEjwsyEYynom",
  "key16": "5HpdAAk66Lgig2ReZEu7uDp8ZQRq8FV3xBT7GkUhkVX1AfmCvwzJn6Kw14sUBZTC84c8ugaoWtfXZsxanpz9ssfN",
  "key17": "2A98LjDNmQ8xsVJh5ALdDpLSZG5iR6q47n4SMGKL7zytLHSn2GEPjEviy3VDpV8T4KAJK5fMr2Tca7cMoUSEnoX7",
  "key18": "cmDcknWR8DxMmcycaJNhTRyP4VMzUH2whowgoY7imBrW5rtYKBiXVbGrXv5tX7Lxi9HQSUoykUYRbHdGFZfx1nK",
  "key19": "37KEcCdpniQjWWuGCJKBeaZojXnk6ETayDV1qKnesrSypQqkFZgLnLAaUF9ytbHBsVQMB9VvMUBS4ZN9i775Ygt1",
  "key20": "fdQsmdJgaWBX2T8n7YouzARWu8erdS2zjkDNsopXSz2wp4oXVyFpqnKDQFDYxUjTFQtvRmC77nArtNJ7YpdgNrj",
  "key21": "2qNkJNrJJZb4bzrtPCsvcxqQH91RG4m5Fqud4LPDFjkPT1DqifZuFpHCsMCC5CyW3ZWRYaUFsc6mxNkSUtaMbdYg",
  "key22": "3g8r2GTJ2XqCpZp2QDgaN2P2iFxwPdk6CnVQEBiRkRHvbHm7XXprcZ9p1ce2XkdDR9rw6kcfsY3ykaYuJibkwcxh",
  "key23": "2AkU4nQ88wDLdJKviqZcKW5jpXm6xW85NANW7saPeAKXBJ2z8MnZv61usU7fEZYJJuFaEHWoLDUdsWF3qCfpE3ys",
  "key24": "4f3zVimucrq54buK58F7cz1XCFy62WRDCCL7KX1to7CAia3CSkKajMjetfX1a38DkU8G2oHDroH57xYSfTWwSLNg",
  "key25": "3vZh3Td1VaEewS2B6rP2HugNDvcuUfwe1BE4iL7G1JGeFd5ZWGYqSHa1eDrfdtYSbAYmzqesxPpTmghUYPk2Lz9Z",
  "key26": "2VyKJot3ezqwQLb7pbPbZbxGZN91U64tb37wQzyPHdUtzFZ9NpqMpFaE7U6wg6zV51ScTZXfBu7oakBXcwht2bGv",
  "key27": "AAGzXQikzqogHNXJbE1jSvBHjznLpSJAgbQTJKyc2UzA2UtvjJkFJfaeauKQpntzcp8rmsHiEXqbzyEZGCe8rKZ",
  "key28": "4cQLqtUE29XFqBT1R4fzYX4rDSv4EwaXZTUX2gmm83kuaTac6dRJi2Gi6rJjrY7RREbUJu85VVm3dkXz66ri8SPw",
  "key29": "3nJTFadJ831tmieiVe6tqEUpWYqo359FGopFvJuWdPREQXdib2tTvpjER5nKyY7sXbGQ63G7NiBED1ACeb9ZAFLx",
  "key30": "2CHz78naFtmeC9PwVfUk9Soo7gLiVgtUNyv7YbKC6CgoMSwArwzT8YiJUhLNzBcnmyUHf1gjRgrN63iud9rMmQ3z",
  "key31": "4esXEVEhJwo3xN73CWVvzjRHbdE18rHibo7gNG8b6eDgDGzGATsJRWGo9dF5G5RhSgK29dgXiPDrZvFVN4Xd51uT",
  "key32": "4n4v5YrWHqBDspwtBvXBxYmDYoNQQhN3cV6RwMRmQuWvVzpVBBqVnxjufJSN84wH45tazEpejy2wyn8dav9VhoTp",
  "key33": "VNbmQ4yZ28YQcvVYsG765DSPy8PDrAYDdCUNAVusGfyjnUTbu5pVTAfw6K76cowaQo6y9SdKRzgLYg2rvr7XaPb",
  "key34": "5FBspFniRpkaTUPyA5bHGgHMheLhAjQGMLyuUTA7q1L3ndY54LGtQhNH24YCtxtVs1hriUeMv3NHSjoeGE9B4cAq",
  "key35": "5VA9onKhwJ9NuReNa1DqcbCAEr65gtxaZVJn9bXWRKmz3tn9YwFWM9Tuy7vSbnFEkU4qs6yF5A6DAAhSrqEj2DRQ",
  "key36": "QHAPxQRbB8tX2RNBquX5dfmwuY1Dds9hnyBZZbKJDgnfNqktAUnpV5FtmWTzVBD733G4Bka8yA4NszmrS7hoEGW",
  "key37": "679iVFFk1gtkzZNZRqijKzWiuHnPXkJEDnpfaCoaHBm62jW3AmrmaF8kK4L96LGiUrGWvgeHuTsuh329Swomiy4P",
  "key38": "4S82YNkB8KkcoEeZwRo182PRqdymLo3w5YzCD4ewC4EZciX222pkYoQvCvzWupTcGrs5yGw81utnERB8yJY7kcK8",
  "key39": "3XmHWyjULnZHEB6pVRXzFDTGFPkUmtgTZAHDib7WFreW4RTHGGGc6ucjBrzhf9eHQpwFZwEHY11fVvK7p2gLwjjo",
  "key40": "214pbpRVhWU7UpwVWHfeCAt4DT6pwbr5cxq4Tukwx1wPGbwrTb3cf6idnSwY7DFgnHczRankQZvgySZcd2pUJJX6",
  "key41": "4tuUiCNRBMhuJGzn41swV5GNB5xDx9n25A4e2ufqxwjkGCf4qSSjiLCo7go4amS1dMyxb3jCuRMyprCZZB9a8HpC",
  "key42": "Jg1QNzwE838t2DBe3By68GczMCSxCVA25wsnu3gjNivXbYSd91WojFinVTUgHLqBQYVKET8WxkrdwXcYaJwgm7m",
  "key43": "2TK2u4S3t6HtiqVFaXQ9hXzozjrvfatGHvnWtuNenASTgWLifwcFFqzyiDZ3bvGKfxa1XxKdLC2GSMeTdiToTdDL",
  "key44": "v1JKSSeAJAHKwr1hqWCPZ1FL6v4kndCWy9doAapUcNzowBPYYSd88GXYe3YybhqSBk3osRJHYuxABFFAjBxbKTv",
  "key45": "66KUM7BgBESoLWVyF3aRst5jq6BxjKvRHVBg3BX8QmQbw3HGpPbZ2FcpLCtRXkvrQY7hsA68qkQ1W2NjcBg3BTx9"
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
