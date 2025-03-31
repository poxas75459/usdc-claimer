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
    "2mazLyi14tUDu6iLAuuLwjTSRAxfZAhQAEzqP4o3XsDCwVT1FuGZ7oWroShA3MMH8MyykekQMS8PXuHjWmidYLEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v69d8B2uLkr4dShFnQzqKWhX7U8xKv4e9nBjaS4mK7KCd7pJph7qFfRrHnz38EW2dxCyprDjTcXKeHQERXad1wx",
  "key1": "39VyJwWHDbCTRRUH3jeYtD3hS53tJSC54TKMkd1LRFQPZxQ9sF7TJVvKUDtekF7ArVDdqzNuvYkB4iZyukaoEFrs",
  "key2": "h5wrUpK1pfLePBkKgWbCw6urgEZPGAqx5eYorzTudpgBLrPs82QUsRQdv2WEob2upgGje9MiEHLLYRsVyBScMte",
  "key3": "53cpMLCuCBPfYVk7iZoMRhnG4uFEN2t76YGetyhcKdWpzuWyj4R6RTqeKxuctNqC1FtQwUvRBouyQZZPvsyPNp7d",
  "key4": "2QzqCNeufLTakAYUUXqv6HjyFQ9r7n943g33J8N9Cae7p2xQ9BKA3za7PS4V494pLVgh8rsNierPZNrwdW4NfACj",
  "key5": "22bceyk7gm2NhMHZRwf5LHeq6ji6r7ksg4KZbBvWuQ7hdHhxexYLrss3QuktQKyWrdA81KZ2SExfB2nVrqMUiTUi",
  "key6": "4b4PYzrAUXsXffU9B2ETSJPr5ZCKaBbY6YrSSy3GoHvV6hL5KqSKra9eWizUCritqix7aykMB2BDdkFTbFdtZCaZ",
  "key7": "5AFkqvfMgXLL94qKb7g4MY8JaHdLbNsitXx5EfeWcoGjf1hQck1Sbt9ZXRc4aCUTN14ZnNv5gjXFgHHwiZsASanb",
  "key8": "36VNhSbiekpK5Yw4u9CggrX2rFVBMuxRPJB3BKKR1AHjMgCjYQLeiPD8xQGqJo2XzaJsF33fXZjGKC4rB1SWguNJ",
  "key9": "43ygM9XKGHgVJnXdrR8yrxM7U8CJGfSFcCZTVbMVpcieU4CzLSymm8t1L3YLiDkxK78qPpuRvzB661t3V2LKQpCK",
  "key10": "4vrcuGEi8aqSxuxwRgZx7KrtRAHGFSgbBA9TGdhWMy3JmHhqP1nQGcukuRwbHoCyaC56fXqGaufXf715z7NC9igY",
  "key11": "25QZ7DPLgzdtfxqUts8ekX8eugymCQ6oFGJghjMkeQL7r2Af2e5QKVfPwF3hCGRrTcTRCijTBXNCvp6ZESMtj3Ty",
  "key12": "43aEnBTckaBL7Cdi9GVKXm6eEQGxe9WkEeh6z5Sjaho8fFzMZGpH5XBYdbAUso4QAhQKzo18bBEhhYa9WyCC7AW6",
  "key13": "3uX8YNgBJuo12aiuVR2inpJNAyDrNcPw3k1aq3SoPTFmBfurHGvPRRew7ePBeKpU2yUo81P8V4i4rSXxx8EGCWd5",
  "key14": "5C6bBgN9KGjwva5DgRij6m65oKD7rUdmMsiqAanXUUVQTteZ2apg1JoUvJd6gJArRLGDWXzwA8XJS9uKxLoBmbwS",
  "key15": "3aXNKTaWCRe2ugSXf7tPDEXu7qNP6KVypWG66hRz32wJH6ojazHyV2uBoF9zXUHKo4qVpaGrbu69xJBETnJNMjnM",
  "key16": "3GZNSqMGfv5tnWiLC88hCcGUTBs6Djr5xCkcj2joeA7QuWrmc265ma5QH1zmZomVh4UiHAEgEYn27BuCRJDzGxg1",
  "key17": "4uDaGg2EMcq3dDg6zmjdRVFcs3gM7EcfsJuUtFogfxWNFXtFk7U1kv2xUUpAkDTFHUUNKn7VsrzuLdZkFMTNYBqb",
  "key18": "4YwdwwCmNK27kZnzwnpyntzyEat71xVkJx5sHTcbBfEoGPB5wnn5f54SHZrrbG39ESDNfvQ4wQ4HTLRMiCKre8nJ",
  "key19": "2xdXg6KWoH1ZWEWYbXizCWw1Danw6XidJvn5bi1dhYpVQtvg3EJjyYiyEZzhtrmS7WxpxbBFoT8NVw8191PJhW1M",
  "key20": "2XPE7ywWX41a2eDotXmSWP63RVnsSQGdqQT3mEB5QoJFGSKUhTXwdA6MVA7XvuiCR39KtotapyjhEVd6wFEdMkU7",
  "key21": "3UchyFyzN12C7rGWfFHwPv8gKyuz4Z469dVM8rhUEHyzAtWxcQzhFhH7ycoq6xX1Vvk9r1zbYgMzQymYUnh1MNxG",
  "key22": "4iGD3fHhVJcrC2KJ3bTRmrQPnoBe7RuGJCQn4nf8hfDQN8j8Vgsue5J3rcyGtuamGgzw5ErRuJhtm8zrvLpwZLXt",
  "key23": "2FCkupFnkMw63m3J9ofVuJ9wB2eiAeVWmavE9YRgLR1ekBzXpv9o6WAvf9BfMoRucm9EHcKwUNQCrhASJDZJf5cE",
  "key24": "371m2goVe5deFzza43a91AZTc5MGNDdxJeSZHXejkUrLtruKX3u8R8DXmJtqXZsxZx45upSf6UGNURDVbeCGeiLe",
  "key25": "qSYTb9Mxp6mucisbUEUpUGGgib2uL8FupKbaVY9FAm2GLanmbe9cnAwSaqT3SHC2VXi3HvTAG77UfVf7PTo8AX2",
  "key26": "3gmEej2coHcRQLVSGgcv4Pg3DCfLx6oe4gWhF8zrpDJhiejiGwKhGVoU5Z4FcrYxoUnQ3rcCKBhaDGpLzBv9h6Hj",
  "key27": "5aeHzb4Z8dMuSLYb4wF5NyJp9wiZuN3YNFWc3x3NpCLNaA8tjzb1gGvUdVSMYq8G29MbAFqKwRx9hisceavTtZd7",
  "key28": "btZEf55sk3Uo5Mj1CtaEoqQk6u92MorDsVKoFEJUPLkxLjyxYog8NuDng1qVqVnDr2bHXnnsrbrSY2VNi2Vk4ia",
  "key29": "5rb4FC3cnQdNpcks3Te2WreDTnBAfcVQ8a3fn56R1jnrj8NeHxR5TphptHu19bfVNjxf5tpSuhdCqf4buBM7hLq7",
  "key30": "KDto9mbq34DfnXuJk4qPaoLydRRF2Ge2J2aht1KE7ZLc24Q7thCnmvEErAf8ZnQE8Y57pJtUHzrtKp4fGgEyBQ7",
  "key31": "3J9AmywKbPzK69ACpXxDYZKo1ihLQQ9TjZj5rvHY7Bhrj5Cg3oHqx3uVJmjsLYcW5zB8oCZgPPwGpeNJKXZoXy1Z",
  "key32": "2kRCbbwDuH83hncUZod8GRfEjwZyi54VUgXSTUeCXKASpuU91LjEB6qfdXLeFVuFM9kCUjtS67Br8NU88ABmm6E5",
  "key33": "3p5AKzNp48pr91hgZ1UTUU9SZ7Apvyt8WgpFdNUP8eESp9wsWBmqrSCvDpPHy2LrDWePRW4t4BQAEFASGcvCZzTH",
  "key34": "59gFJcWQiFaQuXo3K3J1F17pXGcuCBUwdET5iqUARdZHa9ThR6nAem4ExvXtH2q4eVcCoGuwxdNiwxPqKd3jgcCj",
  "key35": "54zbq2M3b2rSnZ7M3UFTTi8rqyDWr1LeTPbo9uF56Ky6op7uJZMsHSec2kHvtQ4mdzU3VpzaBFvRzbP2KHU8i3x8",
  "key36": "24VJmbGLcZ3Xz4euMfn6o8hisJDZiDfTsrjGf3xK1mVtobnbV9Eq8TH1SzHg2ymSb4SuMwW3h2srYUPJpvH5fGV4",
  "key37": "MNiweNrRpPF5DNLtb7hXmYWU4TWPXCPk8pP7jDFRJVnvoqjjcCedM3TPhvcar9ezhwbKv4iwwXyf1GnVz3QN3KR",
  "key38": "P8scfRuWVk2aBDE2Zc4GijvHMZMjufbYRiYUWpoEXFv9RMjY1Qnzv2MNMwkKixob6NekFGAoWVWWG32bc3hpJTS",
  "key39": "3YHfktLiQsGLo2au7YFDF9FEYfipHCXkTKt4wd55SmPVp55PQPiu5BH5b4TDkpEJomfga2eeNUCq6RxdxVPtogqm",
  "key40": "j84hWAvqm9t9aUAYtztPfiezVYRY1yrPhPA6Wv8B8h8tKtGswkSuPknufiPUvcEN8PRwfDJuefEdhD6y2NWLW5V",
  "key41": "5cUcoEVy6ZezPcMZd85WbWN41zQduyCZcXxGNu5Jp8sBgWJqDm4dwCWxuLZpkoUfW8tcS2A3HZ7vnxwgX8ziGK2D"
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
