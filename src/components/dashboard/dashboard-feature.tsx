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
    "2Aq5TbARJhbXwtXQWuKATbNBzcm9zDeh34jKa1APWd3ZFrtg8VA5sC3u6f53GUdeNrkAKGtL2pHxUTWCh7v7bMTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFx4FfU9NimfibXUvbgPgAY1bDbAjKtfqJEBgRgwoFcC4sWmyVwLDtdrULGwtKNLqUisV8xz574dKALuMbhKoVR",
  "key1": "59mpaWxwhU52GMAffuu7o7VVC6WW6YpA2KNkqnvisGD4UkHwRoqBkR2P89Hw6MEps3nh5CY3MxCNTDiwCTqoUCyX",
  "key2": "32dPemo41CyBMK9kMtEssiFQgGFqk9GnQVJuR3xLNA6KpsbitHmeCVXHtwRmJWjo8z78yGWdJDKSneGzCXmo76mH",
  "key3": "MPPXgRfiW3mjQgc2PXiEbsd1dC3y7Ts2vnjUsureHcpG9zRiUC5FGcmy38rcHJSFFHKXkm4ZTeRkJbex6yP6Zwu",
  "key4": "3fsxNx3SgwK52M62Btq3sAAiBhXiQiEUBcoPuUt2D5ZxFh9Bwo9jhAATse3FqKxtjUy9wg1BmUd4CWTHGtw9v8as",
  "key5": "qfcZFiKg9PKcN8qJMMF6CjpvWpjqhv6RCKXrnR3B3EFwpzRZL68sA82YJdppvNjTFpfMbeof2RpBJ9aUfoTAfcX",
  "key6": "5vkjzWLFpXyFqFzHcADgzxnB7k4QqWM3VQvA7EbeyrfjktH2PNrz1GRdMNE7eHbu8sXJYNWtJmufRqb5ktc9t65D",
  "key7": "5RszFSQNZPpq3a8s8SYAWyZk6rZz4VABE3KFcRaFgbPWBnZBAuz6fk2f3BECqjZu2xNFdaT4n9ev6q6frjPrTC8i",
  "key8": "Z6yHsugLVosKvCoy3CMGqfsSZFhqEmCCJfysAJ5utusGodVfHwBjtxqDgKHNnkkqgV4nw1y9SjvWiXjjx2jr4g4",
  "key9": "2t6PZZksQ9H3HKfuhmkWEEYryuNNNTU3xF6vjuBu13hbnNmMm7TDpF3SDucfRrJejCtGFDQxJCG5zEi17CTihHHx",
  "key10": "35BsM1Vuz27fB6qmDgWByTreJQ9JdRMM7UnJvKsL651YYmHK1tSybPfiS7ZBDkPy9AvbJidCYCwdndFJ2AgQBvcH",
  "key11": "595aPY2oj945mjv349yJ6h5BVhPxatxhCREHqw2M5Btq27uBEyVzY9iowdVV2bXra4kMvekVownPjASj3TPR4TcJ",
  "key12": "62FgiaAqcNv7y2sTETLQ2sfVpQ3p6pmRsPuMS119gWgS6vd17eubTfEMokadaGhYE2UQGAmoQ62Ad1angSEDBT5i",
  "key13": "4aV6zYCEP6Cwod1rAPUxcWopTdnN9eKR85tCrpJPPjki85vWFhswpDa6waD1gHhSisgVPRk3yWobZ7aHogeMRf32",
  "key14": "41Fa3oHDAr5b5nnFXzSTHgg62B5npQ72YxJrgtUs97BFB7CRdADik1uy2nY7YVt4wfCNN3hgjrxruCNwPdona4Qu",
  "key15": "4hForkkU8gE4AL9BynXjnZnnh2erSQBXvtffsKRq8hMJoT1wufoopUi3Lqhx87zyX2tidK43v68xtpDDFMvig3Gm",
  "key16": "3E5QU2pV7azDfjSm3dmKSGnYJtSxVj1kzKhiR9WBefkM4S9XpE37q2BtUqyVS2KWHUbXAcwQZBGgmEnUzrNU7f2Q",
  "key17": "5xRN1AtJMTZMkBbXts9vjo3LsyGSk2wqfyDvGqBZXtJTzdLdzAAb1NmvCkJomrMV4BFKdwmj2eUgc375RoZjUjkM",
  "key18": "65CbyzyvX8rtFur8nwLHpLJmRSmj5WKiNhJT9BcZ9RMpL8oa6yoUCuf81o7eFLVLxZQZQoMCQxHCz168D4NSz3ws",
  "key19": "5CMmqqN1YtzG2MTQmSyU41FndYYLAvsnet9yY8aAFZemaAL9sGtVnP4uAWknpzaYwUv3CkTC7d389hDw2tMH3yEQ",
  "key20": "3ArXGX69njtYBf5vvQAamPMVkysEeg6txKUJ5Z5CQgokKnvyVLSzbBfutSoU7Lys5QjzXvazZx8DB28neeP4uRM7",
  "key21": "5mrM8pp3Z3zizXGL8ysmTzAPQXyjbZ6v53JR28iV4XC8W8KxmUT6FXX7956MaCnAk318uzBMa8d6RcxeUBKwHzGE",
  "key22": "67m8dcYdVwKkkTxYeNcHjdidALTAR1iV4zvyZpcs7oS3byKv1q1Jk3YqLGKs9xQJV5qgyYbEj7ng2poYcffLaozA",
  "key23": "61DEpS87m755RdhUSQwhouS6WgdpJZkmwz7ayeiZYRkiPNgeEy6phGKk7ntwA16dMffW2iqQb1Gu9swtodtdbaGA",
  "key24": "2om6hCh3xps53J1mzeGre4j5Ym1oNV9zA1ftAdiPqr86CkWV5rKVLfP811FJRNStdWMjZcW7hERXAxcsDazp6fmT",
  "key25": "3wyrKy7igYNGk3y6VcUCHkFTzeVJFjwaMVwnyfSrfzNoKJQsW6K3WDYjL2MwH7HKuUAFzLQbc7i4qQrTpZoz7eED",
  "key26": "3DKitkcM1UteFBUWG9Y1uDkcUhefyVXRayH9oJgKhB8VYMCm7AeNxDMbX3XHYcedEr2CjVSHoyTNN3qnihsnXAZE",
  "key27": "499ywK5sPv2G6cPpvKeiVGU2BYDhWSJwmyPFB5YvnBqN3iCxT2e3XuPnwWV7NUofmJEmrsS2uFqmu3c5h7meTgu",
  "key28": "2kEYAjyQdFiyMMkKC8qvntJUvU9E4RJUoGnhCP9bzWvcAFidmQLo8uaPkK1THfkNUUzKimgWeGn19nexEQdvrskQ",
  "key29": "5j59yWiHFt6pmh122xhpTVUJhGrpFF6yRc1ziqp6rGcAZfgT56yrhfnEtD6e2yMAyv1c4CU3r8g3XNm8VbELqHg2",
  "key30": "4uCTToMvtuBbuzGKhv13QqPKKbNCm693By9uJUphELiLCec37kK5VkXV9T4rvcY7g4oXW1YaUFKGSTUD6x1XhN7R",
  "key31": "2d9uQUb2HbBYfCFZhxERaYuAQ1iWreCEYfJfyvLwZDSvoqfCwkfMTd1Gyi5UsLBfRhEBJHsN5SYWpDnWuEroq5N6",
  "key32": "Smdkky314YJYi3SKu662CUseWgdc4KkMp7nXcYsSPpy4hWtafHCQyurWpuz9uuuPEGogMkcQJ5AWwQwVsBswvKj",
  "key33": "4SxEaTETsuu2VowgyEzHkirrpdWVHsXnun81vKbPMoFYtsDMDcf2VqD5zofFdcX7UgQVjo7B4W6uAGHh2QneJBGT",
  "key34": "52wD1bZZgdcyLYnyXgpCwFSaSykw56R7WN9JCHw45j8GybHPGG82iqTkHQzyWkUyBSCqx17gjBHr7uQyAmcv1Uo5",
  "key35": "WTCCGRjZswd5jxUVVnihHrcSwiS6PvcFYb4Sh2SaE1szHrCHgDJBft1fb1bAAgVsGdNm5BgJYViCz6g4CusSRJH",
  "key36": "VzTy4zityu3uY4nvx5yMpdiYHTEDdgqx97xQoLMS6dYR8iKo74gDBEFZAvdWHh6AoZkue8LNX9tGhB36miyb61R",
  "key37": "3ZBxdvQb2HyahQ82VemaTcQJsQKQVRniiWWN58tnrgfBFELhW96cVjnxYkVSnnHiC4m3E3divvQDZ3T6pUyeRrHj"
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
