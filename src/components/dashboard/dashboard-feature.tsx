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
    "7xENvYroFE3SK3SDpYHdaiUgydHphnkXFgvRaRq4Mycnd2Q6cszH7g4j3kksUmJfEomwwBh6hVb5athQhSA753y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xKVai631Ub9kVXag5Z9JpsUYxTscBJQm4Eb6rzw4iqEyQ1zNXT7C8CU7q2Lmt9fN9bWGqXENBU4kMnzqQ6RKKug",
  "key1": "4t1rheGbhG3WVCJ7oRcA9ZjixBFatPTBPgXrrCa9PNsArtWCoGvDnScJJAW5HApTPiErcRNaaoSaLPbAmQrg81EK",
  "key2": "5db1qZ7gbwCHKxFyiSQtk3jUHr8d21LqhuYvoENB7F7eV7JiaVNs7CogxbhMj6yh6NX24MgL1AU5PmJHfCMNc2KX",
  "key3": "4fCHSQJhWbXoGbkdsi25D1wsUdJ1CADscjJTAHcJmg5LW8AEq9EcseanDxxxALQV83Mj2qe6CVHwYJ78Yx2W1oj3",
  "key4": "2QvQRexBracrXC7wmEmW8eTKwdcvLdVyAEUfdPBewHHjsi7p4qcvMwGTEewZu1YCjmjt4v4VwGHoQdxmYP5DEkmf",
  "key5": "3YqmnT83Zpu8eC7AwKMks8B1oLouratnSNSsPYfh7F37RMqYN6UHodnFhRRp9RSccqLvVjwNoRntNZ7DNGKcKkfC",
  "key6": "4UNkDPfBCCYtQzNn8RhG7uvLFmFgen2vzxWdH7ajdxoGrAvh7ZxPWrfpDiAGg8JDnN7q4H8CYUoM5K5WQCgZPq9a",
  "key7": "hLFhe5u7955RFNmCon5pWSY1L2T3ZDG53dFpyhPtgzpjum4zn9E4B5HHG8hrfrAKCRWsPEysFDaSTTSiV6aJ8sv",
  "key8": "3QjTVCtKePF96qzoGejE6dm7JBqMhRPwGoiyrPejZabLL95gYAMbhnfruSA7T8tZLaHbj839e7w25gyfoA1C64Pp",
  "key9": "3i3XJAWStD5hZ3NDw6j3jwZwHY6QAf5Cuy22xh9U4wN2Dopa52p9PLFhfrTCerZjRUMvzHD9XiyEE7WUnTBEhFgJ",
  "key10": "5ExWhNQ9VDxvUmrWv8KiAQQQocPn5Q9YVuese16yBrFk9bEhqXSTGpqo4eBzjUeqrCCK3awm8vN8A5DfKC3ogLgr",
  "key11": "8kCRmpTTz54ei2H66tQrCPPRKatDKqrwgddJ7HiTLzfhTE6T1GBft8Tv1B2JwdNpGe5K55Mbd99UnRdJVScJGfG",
  "key12": "TziQ5EsDcqw2bt9rmLe6Bz36oaFFEAU5U3roPEnNCpsfmnbnYVe3geARiw1dpLVgWSiP3F2RQtVPFzmozdp52D3",
  "key13": "5f5uBCfzf3MdK3XCpMrmGy1RomBGSbQmVc14TXRQqZReL3MdzWT4WjMiQLFFzDJtHyuesmG4whcbUm4hxpa5HZkS",
  "key14": "5CGcrUFurH66oeuNMkdSR9QoPswNZs1VCsUymkRTvzQCKryoPBJcNgySEhyUbqAnzyo4mMN3xCcb2dAsKZukVP1Y",
  "key15": "iFw3ghptAr9WdurXHPBambA8KW8YhZuY5KnLUwYPcyp2jP4gwaiyfhj2XH5phDgU35xTCShkFgNYTbFR5kcEMCR",
  "key16": "4jTZqLrMrvdLQegWroxt6N9j7nkBdnABXZn46ueTEncwWDYCnt24Y2E9m4hKw5KrpCKCh4hmK2Ts6hB16ckY11oc",
  "key17": "5ER1p25eVsarm1S71GpvaqYuH7ZFY5eiW8VS3utd2zv4XzpQC2gGK1BijeSaEPj9n3znf2hhmUoiLMHp7cNY1WMs",
  "key18": "65BA4h8CyYZfP64tu16iyECPBWB7XsCWF5vPfMUQnRQJcdZYNmhELKwmeVuantBHssdXytbgSZxy72bRHgJHzrjK",
  "key19": "3W1a8YqtcbxfVkv3HcedhXzthZMJs9xzK8bG1QCCULntwJ9KQRkfAc2dNtEC2qeY4k8CayU8esKaCUUmQmcUybeD",
  "key20": "36JKUV1yEEmWkdU75NcdFdbe1zv8YX46Aa4eWvUeXEJVgxcY3HyVqsYp2oUGJcZkMb4pEtriJJiQvXrrpitStNdp",
  "key21": "4rSZBhbRmSQeNfN7yDm4zLDYFV3vA2ujoF1HqyDXEqChXV3e1EoiguvPqNtQiP9aGDJqLXsW16wY7SfaTbc9NoyF",
  "key22": "2FY5Lz4Mce3JH3Sy5dAAiHC6boYxtDkYjw2KCK1L48L85VW7Kh6NCxRHnctjhdV3Q21sBaRYKuBFua2GLRyZeN1U",
  "key23": "59f1kUHrsTF3eVKA61cC1HSEhjqFxV6JMZhoPinut8cboYWvY1fDMh3eQZpKVf4tsjtDbD1i2FXQU7CrRBq36hvQ",
  "key24": "2ZLaTvTS6SUZnoCKutaw7wKmpZn1HaPmSs8WcooRgm8NDC11qUzZvazZPcNDFFkaLMWjrJQob22QskAQ7WYE9VpA",
  "key25": "2CxtUM1rzXuGhMSvxdh9fu37NJGNGZhbgD6JmqVVqAfVT54nRmfoTvA8stRXALvmARJ5ybRvSou5qBXvGVKSMwG1",
  "key26": "2RWDw2bvDR1LHj2kGGomBwg89mhTuGJSxdippWVRW3cJHRHJQTi55Bp2Ny7RW77RiGFqtJcKaEX5dw7eNz85mwte",
  "key27": "3E115xpzvvoEGkDutdS1FqUozsXYwyijurhoDxcgfeTHpiw6nLAQHJnRs5nvxFNPTmWPQ5wvry8PNf94u5YoTebU",
  "key28": "5HVdUzabN7H8szSyu6pxLm6uQfNjBNa2PvS9iArNLfhaT53pEmCHWeQgTpmes6po3dsc4z3a6LxtvnBiL9PSKg2m",
  "key29": "2RtSFgXdTpKtPUfA27b1UzKTnHFhE7TVd4n8jYFppqCZmqi5B89NF15NT8q9htqXmiZRosqjVndcJvHzQ9KXM9M1",
  "key30": "3C6i6sf5r1ro5Ngzvb57jdFeWUPGTxwkNfy5WhNSgwNivb9qTUETsd7VZBtq6By6qzbTkVZ8pKGZSZFKh9q9EiU6",
  "key31": "49Z9fGRFVo716F3BtobrXGrEcv1wXLfoKc3mhZ4wq6nQjwpTskY5Yser7RuEJmy742yRKM29CJLTQ9MVaQKc3VyR",
  "key32": "23m3du1ULsBCEj5zhupMYR65qov5aELjAhNtp33qPe8nxmTNzY9PVDMc17Sr9Ce1icRM6UtVpkxkK1NQenYzmiBM",
  "key33": "2HUkh3J8CwxsgyYxXyELjhDxpbnF4V3dN6BJmjuXvQ3Ej3A5JHc5yXL7CXph4y1ZBegQ4iFogcCvuwnh1sP62t77",
  "key34": "XgtqghmWn3nAU1fkiK7PTWpLLF9ZHxTgX7NiiZ9Fm5H7NCEeFD54WKzAd2nE7M7GAPXVHaEG2h6GB7Lqe42fcjJ",
  "key35": "iGwm6kPjt8zLgWbDzvybq5Z19KUoeMZJUT9dahp6YDTBqGae6NFErVBmBBYcUXVRdsC4Pcm8kyXowiGwnR2QRLS",
  "key36": "2XuQz8zEdLgXudKZuZmwC8VWDoTeXt8bcAF6o8UwuCo21S5K6ZLTkrwK56iAzzFCxpZgM8YwrrADafNsbKuNJwbF",
  "key37": "2QRYWqie5KK1GG2gVnFGhz1wupzpBADRTYTVzJupdtB7sCRm1FP8XHQhW1tPqXznXFSt9hACF1TZtNZFNRf8CBiH",
  "key38": "4giT6e7rxCFEQxcMvYZ4vKwexYHMhrPrb689qj2ZSy2i7YbwGf33WjTaJ7qfqAeAPqP1UzLbHSaTXiAXR8z47VrD",
  "key39": "3z7vgSNmJsgByGVt4cwmkHdi9e6dAMCqmBcecX6MvXmrL9YmxxZhB2LefjhQB3qzfTCggXFAzK3NiVM3h3u9fhVc",
  "key40": "5QyEBg7MPckiZUxkBkTuxees6SykAuF5umrWCjVLBxdqrQ4kmTC5HTPj7rmpzPxkgFqFHDQfyGjrEQWd6PvrrsHf",
  "key41": "4JtkDHKmNGEhTruBPkyDP85AnjPxxJARsHRMB8dvw3gzWsXPX3vRMAXsyYHjnNRASn9fGoFe7dGsbexECZ4GtFSs",
  "key42": "3ZgPgLeAXjXfbMqTrRnaqHRUzgR46cZdxuwCouwfbtcFU57yT9KqttBxnqZwN5jy2aZYqsX8t6bRaKQprV3mBxZp",
  "key43": "228WSbZTWF3iMrccGKTaJqSx48rvYjAjQBSbG677W7GsJuL5df5AwdBkr9YRgaAdTyAG3riKU7y4tS8p1HNyscWv",
  "key44": "ZyJxabtsYNsFkKKgyw9jZoMHwrDi1W4tr6jPn7honoyT3LcibRWs8URTk1kvDo6e7o2J1fc6ugxk646fJy5KBGP",
  "key45": "5QogSu1i2SDxoNZMEYYRf79aQY5WxBD1GAX3KeR81xoTiX6LeeHaZF4SuK3hHttmBXnWkskbWUfjBshahzYwo9TW",
  "key46": "3aRFg23fNapFzaEvRPLnJ8tyv1MZpCqUxXTqivjL6DeY5hmNhW2wJ12XajER3vpPbnHiYYKQurSz8DWrHCKunzE4",
  "key47": "3HNuRuUaHQihjU8WNVqzLHXpuX7JDdjHn9C4PJyiK8dpfBgDZ8ZgqfQDEq2ete7QJL7xsp3QuSPvDuxptWDp1XZz",
  "key48": "2671JLkyr3JvSeCiNcChSqcMhBjhPuU65u6aqguRmdAnECB3MSXtjQPVVBwpvo3o9KvC7TWpSoboMQaxjTYeXmgY"
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
