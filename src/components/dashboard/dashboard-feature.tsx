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
    "5ht8o8A1tWAKmbBNEXLFyyhWhZYyBJLRhSW9N1PYvjgFdsbJVh3emRiGaaRaC8jxxWfoeuMYwt7Tf9Ddwpv9PRVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2K27fkSzkVrzLo3wmDs4gbbzHd3gfp6XUGgMuJmZwaAfXmmnW2uhhuPJUg15HUyaJ1Tz5bX4HstTjvSoqvuvLd",
  "key1": "qy7qV8fR72hrbdLKcNdx2Ao2MFiZxfvgPnyFchx6bbGoEZtusMawKWK2KJHQWehE2tSkFypV53ad8Nc533hAMQB",
  "key2": "6FLWdjjZ8HDSmcRK3MCKaZGQf5sFKN55opfyAeHvo4cysdKihHHnNkvsTAGcQd2S687a725G1r9iACpWtx1avdu",
  "key3": "62D7DcLQLB7KBTwduUh3rtYkRgzvxDfNm8tKq2Sed59PFzhpfUJeUg18Pan6CLegxfs6s8y8b3UxzhZU4M7r77vj",
  "key4": "4kkgU44nCEGSK459iYifDvV9pEpBomnGCHmp6xDBazWJxwTnr1in6UVSjTYH3KXBMSBbk52C4VcXT56iy6FNvxhR",
  "key5": "2sthxY2G5WR8YqDftfbQMDBCmgPazankSvegZSc7aT64HzespG7QMkadR3xUJmQUQJ7KdZsWjrPv7fi3M7e62JwZ",
  "key6": "4k9QM8ygh1p9Dya4Mfz1Kh4WYbToWcgQixjnSwKCTj1SLT8QrA3wZPYPobxjWAtkjXTNZfBbdaStx6BQFEDCUG1L",
  "key7": "2aXYEWQd48Q9jrzNCQsBCQG4ovf6mWudy3xwjmwz2eRG7ztWJYZZZQyW4XPF2iE5koRLspRk9TYhF9vJHLHcvgyT",
  "key8": "gDHUBKhC8bpv938ehnCAE218tracbk6CxFYA7cGmbo8gG4Jf3fzuVmvHRXePhqL3mhgtxzLVvXkTDF518EVCTrD",
  "key9": "EWbovv5LGbGdfg4HnQYEucSwbwzC4VA9oSUUZDVNydpfKwibcmye6CiKvrEvgteFYsnqBQ6JLiQ4Axg3AA2FkXF",
  "key10": "HywMDvEuDekEWTWzWsLhU548GvB2v5VFGFGc4mJRPVM6VuuctWBBt36v1PRJLxozU5MXsRQAvAmEPhq4JBWi6UD",
  "key11": "5DxacWPWodBEYifxyBNBQLS5pfDcSVBLGnhkU7LxHg3CyZDBkV3rhh5rGiQEv4BLTQgqE4oT5kAXMsNbAMXPkhKu",
  "key12": "2PN3v7kHca5zHa8NPfk3xZRkMSuYBtit7CEGN3oDaNRhTTDHTCV11Rad3HgDhZ2bbpCp8JYDnXcpMPDxW7dvPRgC",
  "key13": "4av64ZUw3zAx2Uzanq7DxbgEWC4iZnQj48huAhL6DycXbFZQzDAnbCVnB9s324j4zLkjvxukJbwhkpqwDCuJ6ZoP",
  "key14": "4etTGPQ3cHnqhVd4gJ9xuQdqCJVAXMNP5ywgza6ryJXbBhT7rVxQL2BfHcNvdvnWp9B76x9QE9aq1X8XAMoZPzog",
  "key15": "4Fkcy6xz6AvBsG3GqmQXAhtyxhm3nCr22atPS4rMvNJ3gii6twz1Xg3ZSMw5WtXqibfiX7tjczTrXsnqH6ZzUm4e",
  "key16": "63TbQrZigmCP6sFTjt6yoHVv2VfKF6bGkiu2AyeF4duo69wkFkJgbmQ9ZKUp1t6ehNtcrXpt3yZEdBNLZzUdhGyL",
  "key17": "4cuEdrWvDAK1FSR2hZ746MR1uxuHqbJaV8hDUuw4QbfK6CxxbMyC2hrLwbWthADAgagr4HD5ozVdbUaxJYRVL5AE",
  "key18": "KW5tDLnmRTBFphczWzYxb2SV21eLDxNT4JJUvYSAAcKQ363swM1zAkxM4mQDjW7gdau5sxDxVyjf6pX8axA99mr",
  "key19": "5hU73k46JN4PoSA2wkrK4sMMnWr9Q3Z28hh7Zwk8jEovwUpbeZG5MwEHqNutkJiaoBHTih2J8PB35MJ7uUoDkXmg",
  "key20": "kLTCEUL1CzQawhZygTgrY3NYKTjZivuZDWHgExW6jx3BTUgY7QPAqBbhsUAGusgyLomM5jJmZwgX2GnsdjohcXB",
  "key21": "3booEYYYsevGGWEiwEEYUeA3byzH1g4hvrJkHUSQQrKUHzoPQkTY2CvCbsg6oQUv5ou7ZyPVkDLKwZVT3AuE5TGJ",
  "key22": "5pSE2KtKjsHRNjzaH6LhMt8n1ziPW8VwafFysAgmeaZmtdjLicdkczwXdeK1VJQPVsGafmDXukdJGUPSQqh6PHGa",
  "key23": "3oFVkKEN2mBqdK1jtLs38JMDQ3Cce8EUkMZ62M8TVz67hnA5JEHss8wkmNq2XcMQsu1LjH7q81NJT9bDYWeKtzoJ",
  "key24": "3aAvSzuZTXsjGnq9wkE3mL7wbkVDrVAcpw8x5851WbwNVMHzjumhzqKhfW9NaBkQ6hDKeWTBYa8jEaAaKge9j54g",
  "key25": "hMNcfYKqDP18BeFRNzaakhoamz8p1a8CccwfQ5iacPhUyanci8yzNxrcKLpats3kTux4qZ1pE1nw4YYqfEuCcx1",
  "key26": "5wFC72zjvTbEDVCTqK67hqJfjEquQnudWGe9vsZwdJHui4mLCVdmjBdUc4kSxWRrdm9Z67GWGxx8yi6XaLUw5aat",
  "key27": "o4mzM9vwjdp1hvWdkmG9AosSx5UL9vFhKyoK3z4LuV9XyNWq84kVfKNdfPddmoh5vgsW9vTNaDJURM1kvWpKfTa",
  "key28": "3E4bcHBQARPCcW1MHQUxi44nmoaJLB22bQXEVEbwsu9tFMXwaVreHbLY3MRDCFMdVUX2aDN7V1RK173rJ9qypvbR",
  "key29": "4GZfKzrZeU2rmSqcNLxwLiKqr87VPqkkH7CCbcbvdi9rch87GNxLyrn9mKx8CgUL2DJfZHty8KDeJFBfuQHZSwwe",
  "key30": "3fiPcxMrV3cfDs6zzveaj4cP72WvcG2QHsqAKzChmAe9aKnCbbGDtGcPCYkwwTgKZCjU5Yk4x5mhQEZNC2Njmwre",
  "key31": "VzY9zNC3794yVPkAG28XbpaFH8a2f47iPoTpAkyWnUPbDmSSgqrckDZJUCNW8TYyhv1dhy1PynjmWJjyd9yPzAU",
  "key32": "4SXuEiDuqsr8LbqRCtne7CbmVanrWpydv9kSJcMRuao6m3tCo2MHyjMWEjpYHiy4GVYm8mbd5iF6QejfRiL7uwDK",
  "key33": "fMjnmEmFGrdw2AYNwnXSKo5KamFgw67uDMGkBGjVCmn88hgVynXjFD6dXnLp6VyShoiwwqWd9jSiHc9PMBbCeV5",
  "key34": "49ZSxmojqCqiLEb4v4iHLnmUJJW9aEFbsnzvWxWQA4GTqNgxXt2sipYKw2JdEcarWrhyUZz91TwFAzVsgAUkGegd",
  "key35": "4m8JGUmeQDoJnLuDFeGHMhViTh4PcEEpgFykVmGyNxHbhwb4ZUkazx6ApwXyXv6t8QVEaxAcYjkrj9FrwDaGer3R",
  "key36": "4dL9bGrMgor5wypcig1Eh7aSiSwbPyc87PERhL24Z7hsz733UVSnnXApgg3RF43U1UR4VutXZrpM8jqo9Sz25ddu",
  "key37": "3pwg2wrts4TDUKZLVdk6HZp81T2H6iKbFYX36pkajcyAcfe9uUQK2M7J5ns8hfMsqgNbYXS16gQEatZ4bbxuhbMp",
  "key38": "4jgznJzkdBKRpVj3Bp2LgcgFznYv2RegTTHYhZugS3e8PFf9rZgkPGfJcQCReVJgSCbkgHBQfvN1bvorzh4s1Pdn",
  "key39": "33MFZXfmw3YnW5zoBg3dmLXuxjoJY1bnhKzFvcanAAsKF1GG9LD6hDDuepHdfzuR4v1u2jQDj7Fp5bN3uLoCkFnU",
  "key40": "5wzrhH2eWr7F2WAB2koQLapg3rBhq8swYH37BPobR8DiZSJeDbb9yEXCcFVbhNDVD5L8r7s1LitUNtSYytskuCEA",
  "key41": "V1vAKPwe4sKN7KVfkYzUofKqHZcqEUddE7Xr1ne2BpkPUTWVDR5GRELndvTFQjvav3h7ATtrz3a55wNRtjiXPzf",
  "key42": "4NSzVTqmnEBeAiUURGVkLGqM691cjKmA62pajTHwvkDYDGTNvGkKcffGFBuCS8Hqv1ekGGvVtMcQs4bo7VpH3dGT",
  "key43": "4hsvVSnDG51hNdSTtEvb3UB5C6gHyjCF1oWVyGTte71EjcaPJVXVRNBbXaAaQGCGBLJh6ZrN2Tjh2SX59Sz2vQQJ",
  "key44": "4BY6zBits2yWTVFVzFna1Rn7xqZuLKKgx7QfNqPsBQ7fxnWyF2sGkN1iDM3Gchqae8LmrYJs43vnJ5EZ88Nv6Scz",
  "key45": "4Y97n9oi8EonZJEtRpJbp5raHDCkmGrpeKYNvgwyaPqJmfBQ6MmPffx4czBXNFQT6oJcUq2wBWoeDTB6NmQ8G18A",
  "key46": "37nfVo7VbYhK3aNjwRPwK1Qj5oMyNxxwnMHYtkGLMwGpSAn2cpD14dio8iVeM8yyvSe6m9rrBspZMbT65e3aGuh9"
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
