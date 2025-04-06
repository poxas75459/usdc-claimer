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
    "4k9PngMD7nTTAFmZF82RNR4ScUQGjjbsugsddDrvSRoaZXSheJryH9U1SpEqHvCucs23Bky8RXG1uqpb4JqvgXxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ufDhduqVYsLJGvuAsQZohckVv7cDnDadDKcmVfopGAsK8fxTc621FnEdHhY3V8YjKN58Y2p1R6ae7g3AiYhNYA",
  "key1": "3nTqw7x3eSYPFxnjnVVj22Rbo3Bou6FoA9bJr1F5dRTHaNhxVjo3oiFNxV22qusr9waSno27njTMquYRWMgenXBy",
  "key2": "3hE133doCeKsyPF87ws1xJpQDzaEjsWzonoJFdwTfwb2cTVt5JgaEBxpu9m9D4MbtDVseeh4ExfMtKXNBSLmepv6",
  "key3": "5sN6MpBmNpnXY36cQ5rEThUkxetavHrtBbXkqZMjW1LNovCW25vQ4or5Pxcsm7QnpYhVGMvCqP4QF7awZKAj6UZp",
  "key4": "4BwnwtgJihoj6LDZnk1LuLXJbetf4QfXjNrB4LidDsGVUfkwrZFVFezm3ujvDYShZQdD8QjbXE4PEgxGJWmvJmoj",
  "key5": "5a9yKJVah3FHNiJZqP7cu7cBzSgkFD6NrfyiqBYzKCbgmihgBF83Lk5cHXcVF8Jx6DVDewmY1TYUhTgdGXGqcpCo",
  "key6": "394tYQN3BpncxM6U1zsy1mouRgtxiZuDEpkATrCbitMvGPVumLnuXkvYRs4fdTqV2ETcLwgcvEDABvhXKE5SQDm9",
  "key7": "tpXMHFj1JDAMNzQufW5rSnzLrmyjJtLKVUw8YLs6Uf4fRySp28mRuMFT1QtRTRdXqiTtYpq7yvuuT41d1DBEkLP",
  "key8": "2kPDP7J3AVMyU5BNKWmc52hAMn9N6vWQceFgjzqNgAzEC6gvJi6HNQeWw5kZLSB3Wvx9mPeuFjZoXgSnbEU8wqpG",
  "key9": "5saKbdRNG92Fy3xEG1ct6EifKVKKFGDe8wWP2Vr4RmYBLwh2ePTpWPiSj4zBGLUX3rSrs5UixT7fYdeozaChzYF4",
  "key10": "5TCvLPndVKqjmiEGnde8vcWUNFCPgpuUnBJJE2DQWsnMHngXC5gbN2Rq8os9jpqLxy7z5t55hTf7RqycCq746rrM",
  "key11": "5nEB7usTaf1P5pNQPuZ17HT4YGENWjERb69HZvWZtzm4EF11oaF7RvxcVpdWgaF8VwoDNkkq2UWPrrim4QgopCA8",
  "key12": "5E2NFWxs87Ra4CSxASZkguVX4khvQAPEaVwntHB3ADwqhFek2WNhid3MdPxum3RXsH7qD7x43sGMB7TSg2uCBwWk",
  "key13": "3QyC25sxtwnMFoAW5CSknXBjS11uLA4CFWVP3BZbpaxcsGED5mAoxMCbeuob2ME7cUmegkvVuVwuwm6DqgTXySrN",
  "key14": "392egG4KsPkLKSfv4QuCBDhzDioWjo452NBEe3MVizqzTYHD5acx1dCnSPmQewyJC1YyzZfJJBQvEf5HCybiw8NG",
  "key15": "3r1Xi3qxzUKNw8dtZj7i8rYf9cZHnaTir4pqT9RnadhGtYAA4c2CobApSTNHK9nmABCizXNnrgWxbgB916abatMa",
  "key16": "2vngRzW3iTsvQ631NreRy8K1iknhi5satXySqtNcaxxdfxvfjogf9JYDpb6CTyyo8mc4qVMYJSABnXZSUbC3dYTz",
  "key17": "MMGFBNMbuip8KFsvP6kLraN37Jv6uswQYKTpi9MeHXJsHh8A18wjT99TkmW2h4FQcLp8eHAujPVR9WYJ5o4hfwb",
  "key18": "5ZT6fGeTryhXdWSCpToeME6TdVZyGotC25x3Q96EKZVwWjdoV8fDzDBRTyASLtFx57isTjESVbj7r4TFoRqX4ydr",
  "key19": "2ZLCSEJVDGd6VKgVGpCVSggiZvz2anPrC9gRSKY93WWWy7PWbwMytpMpik1BCD5M7rWSar1LZRrCLDWBmaawZCYg",
  "key20": "AUgyGD6jH11nCQ3WzQNC9UyBtzJP3Qm5JE4bPp9k3bWPC1ZhLV9ow134zTJCQNCyA32Q9euUQTwEHMjFQNm4EBj",
  "key21": "5NMpScdUKVj1gds9voJpyP2tFUE5UFRFxe7mAdYWtEAZMCxsxoTEPTbtEhpPcB9HiEfDMW3w5uTQfowuq4Dzp4nN",
  "key22": "5MtA19uFFnh6pBbwfJd1XDB3d94EtrFFKiuajhrCjcetnuR43nDGBrR94T5i5cQ99VTDHbBox52vo1Wv2pty2KeU",
  "key23": "62zXewkGnKHySbkaUPnpAMeoHodnaQYqxsxfsPCx3TE8d54drSr3Et1RK3HgwBE87aeYZNnf6cVTqfZqSRRZgEX6",
  "key24": "2yYKn2VmQ46fg9CTtR4Vf9bDKBXtQZMyWyjubNtZJFUFwEFKqXMJiJY4Snv7ZyYzNm67YkiThqFhAJaYuk2qwdoy",
  "key25": "2VGFXTc3nq1PATVN2Fc3Wprd7WMcgw135QHSGonqXaZR9ErHvR4A676LsJ8PYowdm4vMQjgg12tBLP9cVAds8c1m",
  "key26": "4DzF3SpfrhVcSzihUwrRP3sBcRZntCaZyHyJAMe8XVRDjNKAvfiMjv3gmBceEEggy4k5jLse8yxFrJ8XCC7eW9rG",
  "key27": "u8F6g9feUSLfjZxkAgSDWhtg3xyVVXaNkTH5HgBWrLzQDw6Y2L3TLcVreT46WYDBfzCx2fwCDqycPkVmQi4CDZx",
  "key28": "5yo54NyuoiogfPfg3dxB2pw1DqU7unPrF8CW6u3CTgDdj227Tjz1d4jKZXV1U1v7jLh6kscuaFJz25XzdSYTNNpw",
  "key29": "BFaS7bsHmqwYCVYgqSJBAvqCDj2aSigaY6WxzVjn2nPBbNGRo1EuVsAMgEQZVJpEJ29cmHdcgDbmeNPU8hUJ844",
  "key30": "4GKraTxwiABBZfGhZXvXi2y7gpXR22ow5vq7e6MQWhaTiKaDeoqbx9xWdzUcgBMXcYJRwQTQBzzY76Ssdy4Xe8nC",
  "key31": "45PkazwbjSLDDRrtjvRvbXkWA5s5beNG64AeqK6M9VJCxCudPPkK4WVBbCWEWud7BpdEyQtjmNUYonWRhtdCAsjJ",
  "key32": "2WrrAPBpReV12MgEg1kmfvytoFTjevNiwLYko3uYmx7Qtdn7ZmvdLY5vVwNup3vHKLEMtrBxbTtswb5NoeHbd3qs",
  "key33": "4iYqBgUbaqVuPk8ykkPUA9Va9Fw3SoZsLuxKE5BxpCWLwUoPhiPpcH25eKGkoXLZWpSyUkVe7N9fqAWoQxc2PJEn",
  "key34": "nyUnLrEiojqLzYeJs3TDmtxe7YtTwELhL6icrYDDUEN15E1pnP4T2benCc6pFB3oM1ET2VsYXSG8h76PCUrdr7d",
  "key35": "3SvRQ7cMoyFjkaKq4d1JumfpXGbLSeRBQ223q3EiAgpKzwreceo41F86n1tHPdRCnXoMtHjBKJSYS4WjsKiQvjUU",
  "key36": "4SgmBLLat3iqVDHNSUm2ZfYU5J3MkvHdN77QULkKExoP9XbfNHbX5W1jwtC8LjetSPdfTYrk56RNaZdirtSLj5Pk",
  "key37": "2LukwezqiS6x7tsgECByzaxSpNTKPTSVAwSyzCBAMsxHjWpihh5fv8WhubfW6i99ztUVDMHuUq4ogsmvsngC6C5Z",
  "key38": "4mCkWuoiwD6dWrWFaVe5a8VNLv2LKsKg5ZE9ch7FTvjMp2cX11dHuhcqLD5PYFgqLG9262hyBUwEF9xwBf8aS1DQ",
  "key39": "5avF5nmP92gbRHuU8jtEo5Mxumr771QWKSMXRGQG8GqCM7s1GEjh1dvkAoJkiR7TJGJw96BGBisW2BJikcWWp276",
  "key40": "2ti46qdSNA3UzQGRoZkuA8eX9CEaYF5qWHfy4n5YQHJtLuShVphTrbroCenYdPdGVPRnMZJJmrfi46oKJk2wGQBN",
  "key41": "5aYF7myZFzEDLz66EKfhFrcMVSpyQw2bAkjkWamDGDDLLkBpumQJAqxVyyUXDYvR2ZkJEyjCgqX3ramCZc3tWmUn",
  "key42": "5DsXvMV8DEf849znPe8bocyECP7qUiSnuNsx2dJJ8px423sUbzKo1eCqSBebsjJdvkGhe7Fu7qMAyBwc8vGiASmT",
  "key43": "45GoeNDFnsT9TtKjHxGBHZTQ6iqWf3SteqSXyEsd5NRFxpMzatuRUHBhg8kLNGd5sHbrXhCXWfk5U7XsAJ3ax9Be",
  "key44": "YeKBuEdPhar1D3zzEEGfdUTWzEzSCD19F35XFjWPNAo5RgHrMVqtw3ymk61gqUFf6mVCNUih3i4waPBpgjM2vas",
  "key45": "2cDqbS7GsSuidSEW545CxAkTYworwTkchwyA4zhastaos3L43iu5ekadEW6zfqpHkbm4G4pj2jk2HjvnkN2Pshf2",
  "key46": "eDJpGiHNq1PCqBm6wNU7nBDPturNrDZXvB168RAikorM8i7H5cA4xeapUoyvsKdg2iKbdqD1kY2jTZKVnvxVMtJ"
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
