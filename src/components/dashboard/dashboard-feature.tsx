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
    "52FoQCNTBKk6kUCF9AJwioR8B6My6535mT1FFUVeqcMfRAe3BKCaMfgQ6fCrGjNqrWCGUwwP1Qm4HuwJDfAN2tkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVTGzbqDJ1k93ZGrJkSAD6Ecs76dGDNMrWW8NEaEPjJ7nCHbiLU7HuQzn8wbU9fuFKEQfCupVkJppt6Z4txUYmF",
  "key1": "4cCikxMM382tjrsasCm8bZ35XksdWdNULqU98vf4etEPKPjqcKwtLz3TA2RU3Hg4HkYUyFGCg4SXmoL4LPfRYKxf",
  "key2": "6M43KhHJL5LCMQurHzqa56Knm2D1gpEHN1AxFL89cnnjMB21CVuy6kHwJgtZEsJSow2q3xP51dpSVFcLiotBwH2",
  "key3": "5ZtEEYZDzKv5B91rvri9SH2Y99mLJrcawrbQuDvPJXJ6gQgf6XFdesmuYcAhHUq4catdygsaFB54yZvzZsWUe2o2",
  "key4": "oxziq3mmU5Dr9boikddsthkxLWs2ezZrnG7TU7o9bz2TbSde5fhrkYUPuAAgy1JKUpi9ZLiukfWpV8oNkrA5uEe",
  "key5": "4TDUFqEwrpFJeHESwaMpdsR4ysUwZ2jwZsfSJJ6uFN3JwdadYQHnBk1uNdYR5tmuy9Sq2i9Ma8fbeZmDQNgsTMUc",
  "key6": "NYCWwK5xiN8GG1wtzUepxQ7xmFNygpGVq7C2coH3rvYN5zkS2Ki37E5eVnNzGTPDSABU8ks6vekpoCuJJpdsyFe",
  "key7": "296mu8H4WLqGEnTb1DFugcU4D1Pucajd8joNVMjju9AJh8KFNWKLxEQFKeHRnAGxNYhQfjZbzABgF6DB1jKAkJ8p",
  "key8": "5d7AoYRYyF3nFffpi8aWHLcqWtufvTJpMSBnjqzpvKtMsxnpbvqnh4RpcqG7dGGHkyv67nDxjXiEDG84QvSzUNSa",
  "key9": "391PmH8FKEQW4Yxyqa5DuKxBVYDGLRv3sTkZpB261a5jRa6L5nr2Mn454Gf8v4BtFtP2V6GkbuQzXCfQtcZRWoMS",
  "key10": "37edTNHUNKoe3x4dBGPEevKNeCgMjcpyWtSaKwdNdTmMobZNv61W6wRFBoD2dREFnce6sN1ibWtTtdB9vSEp21e5",
  "key11": "5GTxcG1BjXdP1YQUDoXUqTEdVmHhVkbJyxiLNJgj4WHf2nhJGyq4vmX9RaV2Hh67px5wQV48ypBcwYKbPU6qaaAh",
  "key12": "4QLW68mHGyjFdVf5UCvFuDgWSVsvLaCPuSChBFwYhuE4ETpUjVwHmurc6VywrFfFEriJWYsSp3DXbzgG3TDfRkty",
  "key13": "5LhiSZJLwL8FG7N5Xyh4S1tYgxBfvbmUKs1MMzrHLKXyFtoFbY7CdAqZb7UELvRK3VN4MJ6vkeNmwXgyhuoyUAVq",
  "key14": "3L6ZhFYnSKM9vCL7pfXu21d1nS2rYgtTFKeJtGcjLcpswMkpnFPAXwaHctdtRnZ98d7BNuwp7Woynokib1nAoHH",
  "key15": "5bmUDUXbYaH2ANnzFuLg5owNb6kzazW5bJp3vX4bHHPUw1Bjx3aMrHh1sg6b1bfp7VCnxvnEJL7TRDGXQZQmoi6N",
  "key16": "tvu9iFpS1T95gPJwdJ5pZAqSdLv3zvE9DaKTrTheZtuoLDFr3HvJHaGovKCA9iFLF6GkbJRwSqFPAMF95fPyLaF",
  "key17": "5fe38smkBwhSECgj6KmxJMsMghSZ7twyMyyo4aw9jeWBayRoVoPxsiBTMPHXKsGFN1dzZutVGEv3d579LERFN1Yz",
  "key18": "5w3NJiVR7PjQZgozb5zu1uN66kotNYhW7RDX2SFS3yedUT7XHLLrbNMxtFwYSSNXwXsS2oNgZd2jmwryPL2k9STD",
  "key19": "56eHSJUZgbNF2KAN2PXDk6bvyLcm6KmHt1xtqXW7kXAPt6suNK2FVrZoK2EmtjAf7ha4PpC3KPQ77FRkLtSt5ouX",
  "key20": "3EAM4oeo9FzTJrfENeeqHAM9pabyQnce25rSo9eRtwbUSFUMjy3iH2N9XHKJZEEviE4xMcsNAcVXqBdWWBivgd4Z",
  "key21": "FgSJ6DiuZii1w9GJEfxtMgmvvDRXtVhieTxLZWsK9gAHBb5nKxPDV7mWTG4jgJgAPK7y1UoJ7rnhWuCmKwJC6pi",
  "key22": "4FJkmxz2TVh3vWUX67aVryKrHhkEnpQSDJN7foBpHtn6gip6pyJE2Vjmvp2PPFCwYvK863U8ZHCGYkjHKddZ2zu5",
  "key23": "5NHNsQVUf6M6VN3YWr83sgGdfFjLFsHgw7ANWCYEGAtT8d1tVRSngGAncbRyRdUT6uhxgTKH2EoSY4BawZ9YjbKA",
  "key24": "4HBaadpcKrb7jDmDwzMVssMM6gEQhLNwyH9reEVe2nx6M2V8NnMymQWgGBfHkzgPkCMLgL7gTdrBABYVoAQ7Kqrq",
  "key25": "3QN5EFGsdvV7XBXapxnvUwmB36CGZ7VDMiuwWtxYx7S5CCrNh26CxRZW7KedZDJoK7xAxyi15YJoV6EVMAAsK9Qb",
  "key26": "5fmq6ZxQ1shQc4AuVAz7i7ttshpLZt9HQW3BaPtLbY3ciMhP9amG4srAavWRkMzuQJBGMkLVVCt29DcVFgmo1CAd",
  "key27": "5wr2QrVWVZtiG3ZRXQzyLuiRK7YAyTQxJFuNHkHSyBKeum3iNtFJnqLNQLwn6KDz2vBybSBUgN7pi7BbENEsCoy6",
  "key28": "5S81hAoyyBeN78catAoQ3mGevQUvcCJFipA4eaX1v2DrtcNSfpEv9k99sSbMfW1jWsSPLSdqvu3mGML54axdgLh3",
  "key29": "2uUyndqi9Tejzpie5gYtAyGNZtjPVxN8wWpbuXbBdPc7EP92jgDLZ13kvpx8JRANQun13F3UftRu7sjDmNP8qsro",
  "key30": "2JZciR3RCr3V5cuG2yGMyZJ27cYfgHDN8CgcfQpbbtGVgded8byNkKMeQ9WUf9foGJ7jj1iDzMCs5zQCdfozHUWZ",
  "key31": "2535qVZMxnxrjcT6cMPSjE8RmiZYREdjDB6MUtqNxguoynGcgPQG5yoUzs7CWdkUY5AdfxzTgtKqdoFMwRxn3wsV",
  "key32": "1fA4EcXPEQ3zW3MiH2gE5tSVxmzzc2qYbkz1hEcokZYxwKLvSJFPP9N7VFg2ZqgBzTPRqERzEcRZELagegQRBpY",
  "key33": "2NVcLoE1qLCbf3SmYjLo2bdFRG6rAuYLk2VwdvFR7DTmuZGugZA9VKoxDURotjneV4D5UvTMcBbRPb8C2fK7ueSs",
  "key34": "2J85R4qvc3h6zfvhGNwcLZ3QYrLmw2uVD5vUdsbgwp2kkaqG4HaAcYgsH3VJ3LZmkECA1Vvm9TEMkz1nzoLFEawb",
  "key35": "3Um1z6x9G7Zts6xcCUf9s8KA7LQHFS1RzuG4JRkANkvqyfsQabWxykTXnP5pUG9u26Poccvm5EWxhhgSQ4pbaMbw",
  "key36": "3hgQGVvKKRo5Ubw9mpcZEexSP7bVsrgdNNuoMsS99ogkQ4aWQH5RJRY8gvXoXp2ESAc91v7xRjHjPVyeStZYb8Qk",
  "key37": "2tbycxvcvg9s3cPHp3sF4rERqFc3Ku7ofu9mjgBVMtTQHWBWcPdecEPjcAbNE4i6GTbojB5rD7puY7HuibnBaiqo",
  "key38": "5vXNQjGWbrQaFcLqz9bazZVekmAGPfMgj74K7jv8xY2KYTasMvs5XthJ8tuvAJCj3sg5ayHBUe6wJpWcGFykcG8L",
  "key39": "S3v9aQHEinie2DpPeMbaJaSX85FmiHxyrCiKrbz6VSFZMHhp9Ta1FECdQz4wJEqMoFGTUxRYbwByVMbWhvmD7Ez",
  "key40": "2jwL3jp9HXLEqJtLaEnoezqUTAa7k7cQ4uoX5r1zLQY62Z7WWxMqHAMvQDPLuEByhz6t6hH8EMAcyNRb7CZ944JQ",
  "key41": "35UWcpLLafAuTK43CZnuekPXE8vTtLnosqTjWthGACG5Umy2nWo4A1pL6ehVCNzsr2FQRQKjvdAYkfhWfT46kPPi",
  "key42": "61pttobMemk7XfgEju3m6uS9BsASUzpFimqgE9BU8zoGRdZgiPZX3urH5DafA7Z15RTTJr9DduKtLT2oocT8KV5J",
  "key43": "4e85feQwZKeT8igYgAXzNLLe8vcW1ehJJ8zxjoRwHpyznBwuaBENkCTbo2jxG7oNFbHibT5SfNtVA54P456qzYDk",
  "key44": "48sfsCbMRwwqwuJwdpEm9YFE58AbEqfjAQMa1EUrgMXtD5JUPJNiXnpWNSDGdBZV6JsQkhwSsy2Dt9qWEVjE1ECc"
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
