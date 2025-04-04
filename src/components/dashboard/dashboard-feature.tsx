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
    "4WXwzDKZpX9NWC6CgUCXJdUxh4VwuRxPnEvtv1NTBZv1VTxv3HmSoRqFoHVFVJooNXWo3gWGSyR5LsiET3QgbsKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ie7FY7ehHfhL6g41XSaopN8PCQCG7a2j7doNpvnfAZJwjuV5XZXX6GW2fpkjdxjE45fZSGvv3dWyj5aqsLXfnHx",
  "key1": "se4TGsjfAp7a5R5rJa2FXekvZ3r2CLzdFmd7mDGKk1rppAGSE2dAUfhpn753BQos5jykB25iGErLLc6j3vNQDc4",
  "key2": "657cy2rb4HV8A54qNMZwsTUmKWnceXhmsSGHCYg43Cdd7TczCVoSx5pCAFFKn8isjrPqFtM1DH8EJokwFsNj76SW",
  "key3": "BB4X2BVEuMCuR8Uw8hkYUm3TeJGdvi64wW2EUqd1eATDM9725gEGxcs4mociKnBbtNorgk1V8YSX5GZwq8CBu6S",
  "key4": "35ZHt475uVhwtvk1fRGLFsUo1i3HK75ADVpkZ64M729cu6XrS9Rf1FXpWfYnPLGjsWQbpyEUaWqNy5Uy8mdWfjyU",
  "key5": "5qvL9jypBcwG1XMksQMx39kqzPv7VPM7CSXpuxw8K6XeEJ2PJqCpvnFDz2yFTptYAEmbu2Mo6NoBLRYXgVHqh6RM",
  "key6": "42KYamAYpgAqBdjVWmUeHBeV5wBKWAZPm6RJ9Wh3nF3n5DerZ261eNsKjrrSFMQpmmfJbwRQWtq3dWbWEXW5rzVW",
  "key7": "3orFXnjtdUd3zUEVfbvKXgPah9gZ5R4v5WHMAWGcE4tNVqvKJFgEW4FNDa6r7ynDmNki2VdNMqV92CSL7LZjaNh",
  "key8": "5WdApFEK6HkQfzRbVBBkdiC3ZjhKqBjRkCr7GTJwbkX88dD9i19HKkw2JZyw7DoznMRmH5ptSM7ae59ySnFPzfN",
  "key9": "3D4JoiFKK49XQxDJEv9yLngi3u2n5VPPpuJPAfWUu5vuMWBx8xZBwi66phC7LEQaLhcWTwKDqZRqQdhqqzzWASHZ",
  "key10": "2snwZrTHa6FDNw65xJnajCqCPqDMvN4FaGNqDpQyHJ5HGigxsUE5Yq78VFXJEhdv5Cu3mkSPTNjM4AbypxtJRtfh",
  "key11": "32JJKr1sK9DVbjhrmwgKCAwydUdEbmExkCFDaFCVMCc2A5wXY7VDoT9GmJppkLHxkAL7rpHwhHuDDCPh7ib49835",
  "key12": "5Kt9CpFKv8pJH5DGH3GMaCz2dJHekPMTdTowhrjRtqYhaa5iLbtWPFeAnMCdStxbzaT7coSZ9N5HizAdXRcNG5Dd",
  "key13": "31s1EAqYeNmZcHBMa1XshXmpM6fR9swohjjzwerL4rMhhS9cAbm5YBxChXBQAzpzqkt9zhjKcyKtf4ch31Lcjc3u",
  "key14": "4ruU4kpUjbMrZrYQMejuDHLgnR3fx9uQH7CU9mnYzbAbdjXEdHhUAzvKFXzW1qHjwKGHDij1z43kyGbX1j2HccJR",
  "key15": "2dQvTzDvVHTsCESFGvMfiVP67HVv5duSLroerqin1qdBT5a3fZWCXejztUxL6fTxEz5c5eYpGku2fyzNUhmvojhX",
  "key16": "tj3ZjD36VcLGSuT3ipYdKKCVguLQh4Mm9XRmbqHGJseYR4aB8BB64isWnWNKSM8rsnSBwUQT3UeDkyUTZELkY74",
  "key17": "5xmza1i5HZyhjBL4FaHabEJeqzsKiYZW12X5zCE9EnHUZP7vbJNfZQ7m9dP651to1RBqAuDqSGkWUHgTNRDCMLS2",
  "key18": "4Yxj2rQi3F3DZjx28GeWANoRsqnvDw6bsX9BgjMG9FAjgKPkZx7pgwzkvBjon6oFNiGP65ZUkzbdqzppBkUfDPPL",
  "key19": "4ki2GwjNnTrYQy8bVd9HPXQnHHcN31SUi1AnC21NMcgVa5Aa9D1XKLkjVknSbwAaXCy4eaFEYzjTcQF9EhTNR3aj",
  "key20": "whExaRQqMN8qBSmcmk5UZVRAajbdzfdof4Ng1qq9yKyUmf8Nf2Jy4gjuyLrGd3TLj2TH7TvCP4FmwU6kADusP25",
  "key21": "2GcSAAY7SKDxUhZr4fL3iSrvMUHKjDoBW9JdutPpyA3ZZBz3eohGHhFQU3bbjbrbCgEKrMpd7dgFtGqNd1BCZXY3",
  "key22": "3FeU8KPAeQHWKtuGQzzAiJ6nLyG8Mw6hLUtXjyzf6GTCP6NTjsh1L69wmr7vfachNaXvmibtanppyCavd1ATRgbf",
  "key23": "4NJthYQGzZfap5ZG94mxvK1TywCr65D2NwPzh2bMc3zTr6owFVVCS8cUfGb61eHamETteXo65XWbPmASZcqVD1PF",
  "key24": "ogegQdF1nZoPwcoqPGTvShtoTd9QgQGZM3z2vkuJoMZ7A8KCHvdbYr4KmYVt9DFMetfCfMiCWDmKxxmifXR3oTo",
  "key25": "3aPn16wwhjTVmFRhTytbgRtKKGhFUmg3B6GJ3bHgaPN3wXVB1C9AyZrn75XMTMeBC6Vfndv3XEJHimjAACJvYohZ",
  "key26": "2TU6999wUWQLeAarZubMWLr8Y3iM8WQVwPHpCej1ctARPab7T7ihwjhBh2n2Rs7KR2C7w59ZZno74CRQBcx575aH",
  "key27": "5u8vrBmE7VbVhprSNmjG9hwXVdy3YPj6nywRznuVeZvt3vvNQdp4hzwDkUxYcy42HPJZZDscAF7VUyHcRKenZ7uE",
  "key28": "4xad8sR2wmvJTSn2fwbrfMtw1226Voj6AdevBRgH84FaPR6MRsD3ixDHxG4cXK4DpUmu7D1FFZdrJqszuHh1zKhr",
  "key29": "4RWJqy2L91MFVaALVoEfFjyhZM1bzBHcabZWp8faus2eWo6UDwxjzyav9iCw2gBVZNraVrr48ryE8944BhP19vL1",
  "key30": "4JRsvoTuWd577n5JmXLLqF7PWLXAWHEzuQZ6myUQ3DfuhJewL6ca8sTtF1JaFS1fkFKhG8RmdN28QSXmgkGXyoVe",
  "key31": "2PsLbPpBf4hvizYRhVwJapTSbkZqStTtNDx8H6VsXDXDwVPPmhvV83jynLhCc2mbYLzGUJi4yvjZMedaQbFmPN5F",
  "key32": "Bn28rt3Qb4aUZDs35UEJX9bqtS2gF3apAddYXh9haNSNktUxUZ26765K1XjDztBZnCT7T2D76U1oYd6P62QdSdX",
  "key33": "2BfHf1tBA9vW7Ki4F8DAxxAeQPLK9N3Bm6wEJk1rGFq2tPWBV4Bno9hJ3A1rzvJskC9chdKPKMdqCyhmx3ARXJoP",
  "key34": "3sqAVgcAHXsQzrLajnAxtcyT1bTNQwRKKcRpcbHiaQiGPb2za8vwoDT8nBiePFKcyJubQPj1f5hxHyLoBgctccHi",
  "key35": "5UHK38sokcrdMHdeD965HiETpxeepMSuoD4g2DqPW7eHXxdt6zW8DoKjS8kPBfoF6JdpkFW2qiZt3X3aucxFEDFi",
  "key36": "3nAomBWdjAhbDtYrWpoAsTCZadDr5xTDpXuYYt944FFuD1DCzWhZ1WY2XSC6e1gtuZdj7JM8SYzc7dAMwJt99ciG",
  "key37": "5FXDMou7bZQY1kHY1bJgib68CxP2PrGFJP3amyiarQmpXG1pzg2LzpFYX8Ki6414y4TviX3kKQYKkwJaWgN2wwfY",
  "key38": "45qh8ASP8k226ZmcDVuHqJ8iKBXkZTYEuhN6YEwEHWSBE6LRoFCHGYVKKmw6KnSDGcGpmbTkq6XfcVehmQGPXg8p",
  "key39": "2GjtecxdAr5u7X8vjyKtcoXkz2DALruLjWDkHRXgTAsKXjSBoLdoAP3Rz9Xe6VQsELkDwFzVyrRCuTWvVvWAJ1uL",
  "key40": "nxm1yBpw2N2Yxs6CUhhndLWG8pQQWqxYoh6YzbKhaCzKxoPCX3SZdoHfZFEbz8tFdQBnwGZqXY5JC9sufF3gcvu",
  "key41": "GQmzqCkUJGQZK5jknb9Pwv2MappnVSSip4NhBTdgjDtWDzJatGxVrQiKAyUXopYaArtq4vCawRewnCGrhBDsqf2",
  "key42": "5vASEyDnvn5eamE2W5en45jXtxhL8ycCf2WMaAhfcycjKemqnQ56V4nAw67bgVfWkyPrfgLi7Zzhc7ypycZg7Yu3",
  "key43": "66ThpnXsdam6JB8okPsVH1E1aEm1gpVNLx1AovwSBvXe17sw1GZQp7qsv7AQtuYNMYqVkE8LaoRwdh6Bnhopiriz"
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
