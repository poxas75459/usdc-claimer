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
    "2fGA9sN5TEZ2WFigfUsp5auhZDvD9DQqcM9oyv6NLQ3u3ECCokqKoEe5ziTyeFmMY26rMNT5ahWN412ZShscDV5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPvAFuzFFcydxhCoL168CvfkxgWZqC3oEqCF5kuh8Nhzho67jotKk6Qr1t9UJeXoT8Ui948pzVcCxSeVYv3EQ9o",
  "key1": "3ZLG5wckZujjgiqvkC3qwoPZ6xd86rJ4Got8Lmo2UZGzz1wU2sc5XULtzyVTomSpmBMDuAJsEcgbv8RE5tejNhRr",
  "key2": "63N8EyTVgN8WxY3DqgJkXvd1w15GDAXGKRw7HpsGuLF18dXV8ier2wuYtLprLC2HfcJK17hfYx4mB99juyTYY4D8",
  "key3": "4tDCHVEULrHVNntakLdRooMawJefoJdCqER4PrCaDVStuTytxaaLjfahK55tGuhAFhuDykpBAUQaByoR7Z8cJxtg",
  "key4": "2eMZ54CbFyfeNAUu6yiwEGWnLW4MYtiApDpHp1uuCc1MnKAs6hiFg9u3HL5gSXi4AxA7nNqUzNuRdi1dbDU1ZLV",
  "key5": "3WtvFYEsaq1JV2owwP94tgrkLxKyHSVAXx5DBtGkcu3VrTjDAMLokUewKDeaS9LEwkZVWWfsnrtdqMDcrmDm6VZF",
  "key6": "5qCZgwpHTfBAqSLMbTM15tTyZq78e1SERqg39CPCxfzKMKJkSCc9p2dAHom3x8XzYP8o9y6uGQN5cP5UYa9Uw6eT",
  "key7": "4PbZ2w61e5zBNCd42cP9arDp3JpKxhpT3RrfndocVRzW73Q3AoKiwGF1N84CewWwXHPEBw7SYxBf3xY41WV19SoT",
  "key8": "2ZjoskiaRkr6mcahj3ysU5o5PkgkFKN1xYanJcpVNkDd8CJs5Yx5GY18Houg7UP1rgCanPELQTC4CBvvvePPvMAm",
  "key9": "4sxoheegEpBrV4You55YzGN9t4fkvsJhyJKjDwg2jN4G7M4vtjixtB7jPrwZuCsHMwR15vmu9xfxDwBmjbhxm72F",
  "key10": "45Ho6jwimyVBninuHDqMLiM1dDsidEqtp8fznofMEFBuDHPGRtRLmChnGBnn1jXY2xdLABnYp52tgYZ4WoN5hxAh",
  "key11": "4F3a5P1uqbQBJvbmhqnYpzZCbbcbViF7DvTs6TzfR8PqZQRn6CkME8GT1ZVFFMKEftBBTwqCh8ZB4CDkEDXbpcv9",
  "key12": "ytk5jzyJ4Z2XCzd3ZgLUA3vxsRBjoKuK1EiMcNTheqYN9vJXW8aGaMvSyVy9qpCqTk6Uz12uB6k5keNMnYZHzXH",
  "key13": "3bqF9qggmdAZPAUSDyjNUCuYjRNLP6mvv5Y5r2z48pBj73hPc6RJPUnRY4Lb7qQYeyZqpZp7bEFozxUbhZ6ZipKR",
  "key14": "W7LQGtHzxkPSF8xke9CMa9JojpmLvLJ6EaawfVxEQN5KrJTQcgxibkkNPRbeFAKmojQ4AvwXUyi7GvGG66PHqRY",
  "key15": "35ZHDdpSH9wjBqzKVCqazGi5Sjz8ntW9vd7RcGHzUWJtHfSNJA6bCiyRKjLTWLcoQsDsBFXfXNqzNFFS9emmJtLb",
  "key16": "5sipyVaR537WQMAAAM7AZDoeDb4UjWyNZoDCgpq9H1BeCkLh2dCbhyehH4dHwSeHbGaNkVpUhK25oqG9AFsbd2Jk",
  "key17": "52tLRj1ZBXYdRnG34endKcAx66FktYxGG2zSN6EeavZzY6CaZhXsZFSoD4tiPDn4aecMuLTrM8Ev4xSY24gZtkTf",
  "key18": "ja8vEzLnEyXx93r2aExxzC9pBeGkzdyauuGAp1YLAfnDiw5XMgTFU1fxjkfjsxn3XDVjobDc6ni9ty8dGfeFVqj",
  "key19": "5EGsQRnMD4jgXsBipRs8ANufM44qi5s9JHdKwXZU2X7WLiYkTsT47KcUsQQ6L82Rs2ptYs2hVGATX1UByjRGRFmF",
  "key20": "3pSFR6yyasgf7CXjDGXU3srMx7P6y1gRQrResR9vqyurLknQZH5nnVi7Dv2cvdhrCJ2NgDpmjCwx4Z4DujsWPMJe",
  "key21": "4zxirPRiPqsRM6PoMgEsU8hAX8UiSYio59Nmfq2cMVt3g3r4dn3twfb6L1o4m6PbJszuPdnanCRviTCVUvPsoRD7",
  "key22": "4nXPVT4KaA2ubJsDxM5zHxJHHtXCz2paarpmH135vxWKrTRLB8NnCjaPP9jruwjAvrsaeNTwiuS2WggGTFsuu5zH",
  "key23": "35npabTYx8W1hjuviokCeRqpzGy4RpXN7fscoWK65fJoR9r4zTgixHcM6hPGqTz2tLo8ux7L2YBXyjHJtuL6N6kU",
  "key24": "o4y4J4vwhnrqpq2d6dQ6Amw1gpwFnzm1rN3tTVDViZrkBvwVJTtVHWRssPJdZHRq9u75mjgC22aotgg34mLkT8K",
  "key25": "3q5b76XUZBLTxUk7FeMw8nKXhztCwEzQruzvsMmcfbwx7e81Qb5VRH71kqbS9XnjwvqxdzgNx8rK9DCV8YguaXhe",
  "key26": "5GnuFFwba7oZZz7tHpqECDkLDA3Eb9qvXzsxBzha3eExsY6NGWjcTmqLUZ25ydzU4szkehgaZ461HJYoh3zQNi96",
  "key27": "5FYVU7oSzyJNPMPFTULMdajsJK1nf7s3dASVQycAMKP3todZPj9BTvN4xpk2p1qjq4J7cGEomR4dWTMPtTKNKndb",
  "key28": "57mWpehbgaPJUNZfqdkzULSzmcMPgAM2Ym5KGZtAMZ5NWcv5iFa5NbiRycDB8n2yPyjGpojWsMYWsyhikXt9eqKh",
  "key29": "2Rp5GkMPks99mfVPhntWTbbMck5cyA6MduSHrN6BjLh79b5pHCmacD9LLpJGuEwN9M82M4iTpAZyEze8tuNodXsr",
  "key30": "45Hh5VLjeT37dH3AEMfFRNvJabPXASi5LgcvP6xbu5LBVs21evqUbpuzoXUBaAMThvmqTXmJipNX6nucszwXTj4B",
  "key31": "3GUV3SzNTXBfw8edcGgCMgTn2Fr6zbKehdnVhPSYJjA2Jdg3UAx5vHaVMTrqzoVVcB7zQBJ6ypHmbMQsuHbhfwuo",
  "key32": "64BVFE7Q3jigbt1yT3NAtbXW2nbLkTZBvw1BLqERzjTNSTC7pYK8Waa1FxafRYGfjVYQkXdgbrD8AxPMokCJcyzZ",
  "key33": "dLfubhT5XDpVzgxJjyD8Qd2rtTohSkJZ8wEyWGknY2z2SEvZizC1MfcwWAw82SwdsemQmzpqXwP3PQbfkgPDYzM",
  "key34": "4fkq5JRNhdiYLs65KcAYjnrBBjDbx788gVGvYXkSgdw9TqEiTauE9BSpX1Z2cUx9hPwmKqvot6JAmmr1A2i3FdEq",
  "key35": "3o6efhsqkgx69LYamWxGor4AEZMjZunZ15vqqWcJExxi53MvRKTzm74wXwzA6M3yd84SDhYBHEp1oDBAdEtkSbAG",
  "key36": "3VkUnuwX5THcMiTvDXz8KuTWH2nwgxPMGE4SpawikUV55DUXoUUTMBjky1ksSsra2PVNxPwm3yjfQeWpLrPGdrbu",
  "key37": "2mZkNSNy62QKiTT5MuHmKSY5Nxw4Kemz73AUEKU4GjakkoQpUJ9L19utvAPZGP1cJpeHVD162MU81TZZ4ChwkGid",
  "key38": "3Wt7YM4NhdAt1p44W6sF2nPgjK49vvnJ2oPz5dgKJv7pccuk8iKGqTJBdzKm3kuk9HMufVjoXRPVoBwZu4hHtqU2",
  "key39": "5WXpHrJ7zFtTGmnVh9g7ZETLUMHkup4h6qU7YbqQ9m7hoJv5oVizwfvkrzPmoceUFGmACTRpZKGDEyK26iognLfB",
  "key40": "H8d2hrSP42RtehhWSjJTwY7fAeh8rVMgBcUdjyXTyRghtNtxzFFnswyFW4zJsGFSAqu2EBo6ELDxjMubs14WwGb",
  "key41": "5Rs7To2ByMvC2y7cMMHkuSFQd2ehuQRZ2PadEUY7neCcYJJgo9y6cunDDym7N1ukByoy3yZYkkss4YGixTvs9xBQ"
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
