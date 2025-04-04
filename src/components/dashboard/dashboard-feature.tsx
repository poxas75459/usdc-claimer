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
    "2wqWsHDPd51tJJAjuXweEBCLMQJEFFxNDoZGQz1waE9he1X4swrjixHWgLofuS5NHB6Rii2FxeEMCnkTfYo6QGxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2qk6HveCYQiVrXBgRsZVDG4XRvCunoLXdjUAjgHtZj7B3LfrWhmbhNUv2yBti9C6iVPQ2ZzEGDmuC8fqjYgaWK",
  "key1": "2PgvmqF5egzAinvmk7tbd3iPfBjfTWkt3BZNg1oSWmjFyR26NZ7K2HmnN2SFoE7cL3puRDt3ghNmcZkFNZDDjKDy",
  "key2": "3F75uVjoPSAo9BKJzFQWEnF89eRPZ7zk7LnjQCnPjTCfNc1fzV1Vij1ETKXCcbeemagnSayB9QrJuCnVYxzyo5Va",
  "key3": "3p5XiXsjPjLMhv73V9E9tuen1jFfk4VCiJrby5r43byaf4FRGwRdsm1SBThMNj3fUbFqbhTU9d4iPVpz5mRaNgU9",
  "key4": "3knMskF9ZLvx6wuX3vcm1xoe4s6nmogv29Up2FYhYor2P2bhfdStPyAdEYHowKDkZwNr259qtxpgS7hyXdcFt7Xh",
  "key5": "2RHg7ZhMybbUt82e2HqaJx8ZAWDCYZzpFzdFcpCmASbTHPf4vJY1dDpBkhHcAq7EDX9fGkCyz9T6UCR8MvfNK7qE",
  "key6": "Ne5iXWkhKdp3QYR5pk9hqCikHA32tcoFGgG8cJc6Nzm4rbdTwCfmmx2JC9mV5KCXJfo6hLV5FME1sH7XKaXWLUT",
  "key7": "rE2Jv4tJZvcCvd36kp8VWgTrs8Rpfh43fBukKge4DXGaxPhoqsCfc8EwzgP8nYpXaoeC2D6JRhrBtTZvy3JVTDr",
  "key8": "38La5ntG4hWoeHXqRowXHPq2nQW2JpiZugt2wg15VoYJCd5zAJcdRk7oduT4uGqqGuBF981RahAwitRcNGDCtod6",
  "key9": "wjKDehzDWPrdJ89jPQbuDjBmJi27iHe553ejxWtaBbkmjY6iNG9HZRSnY8ctNyzAkRQmuA9z9z8Fp92DbYGsLFs",
  "key10": "4dNfDZzecdtexsdngKpHLU2f4Ts4yQ74982TKVjVTEWHPNngSyy5RwBUbtd1GwW64e2tRVbhEL38Y6PenB4xiPgV",
  "key11": "66XEy4gjmneQUa33o5oU1si47KvZgENzVUiQL4tHX4CQHLWer2Kndgw98CorhEwpg8ip5bdZM355teZzrx13RUHJ",
  "key12": "3pEmpEsfihBwdhxe8fS9HrYG1p4a4hLpRB5iumkzi2nK5CSbSCNAztMTNvx2nE3HybpPyba8mh1ChzCrEx4yZSMb",
  "key13": "2ZqZJ6cNyn3jZmNuAb8STsnEnAvDEjv3DbsnS2et1VJLp6SxPLo7AsxUPvaEksoMGoxqsC7HP96dKzXzHtVgpwVe",
  "key14": "5WJEowzHR2rdyTaYpHKNgGKV19ZX3qCcKEB6Bpkvbg5ftdY8WjjvvuLhfVmBa1p8nrRP1G8bS85Ez89Q6KpLVfMv",
  "key15": "32eXQtWmuwTMVKVACKCp6DCKvC1mNqduAasrqt2wjS6NQDUwgz4hnFPZj7CAhweBKVQPy8E1F8csb3aVe8d7sDb3",
  "key16": "e4ve35qytMXkhjErW3nNT8rX6zGN1gi1vPXGQqsNVHEwMwaaS98JAkwusYANXRCtmvqFfNdMy9xM7VDd2sDq5Uf",
  "key17": "4ewkD5HfkhvuXqNixGW6bsuo5NxAZ2HSTCMj9PW2shFku7gLxV6FZJhkdnsc5ejYF8xsteu7mFcDGuucravaGojV",
  "key18": "3DrbHFmEduva44aE22h6em7nCPtKz7cjRzMd6zkvooe4H9A2BFHz8PqaKA6ptdoYPwerGiwhFEF7H6okT1oysJ7X",
  "key19": "4ePpiEwKc7ryE7isGwCqaUuXcMnasT75Eqz3b4wb5CyWBJoGc2mWHnTRpLzQLjNoYbLy1nxF1pVRev3MStLoHCW5",
  "key20": "3t3JHSeXDswewzC9BzK2yPewmt2uSZnJu9XMhcRpra5oidjuTn9EHHei57UgeS6HyW5imp6nvC5ne8QoML43M46A",
  "key21": "eeWTZ2n9cEM6PVruNZkCD8oqnBYy7qbKpXRmrFkPNe62FCaLbZgyGs9UNFVwnmogszvcVycspPxZEUoSw3nYDF5",
  "key22": "2ycuBXWdcp6ascoer2nwsQwGQrqM68fAVVHn5qMSkt12pzGz3Wo9h8ayZAj1kQfwgBPsiEPKgD2rXwZgQFVq5kb",
  "key23": "4Z1yyCBujrmJnYS9mwVDcnQuAs2Bi1PLPoCTiqdZgu8h5jgtjcq7R5sQKBPLyUeNdZ4Y9ogGcGRkFks7FMyNjcJK",
  "key24": "5dFfHerBAnMAoN36d4BiQZYVUFB1vn8WrJjZisvXhrjZj6AKuc4QHJ1jFGMR7UcE13JnVvPD8XXeGffFikTDW19i",
  "key25": "56k52xEAntvamzqYcU3oUjszNHpbqhZePDdXUdvSNBcoTProhya9hCXULfdPL4EiwnBE5wbEHK5AGyJrrAPAq6bx",
  "key26": "2ihVb6WPonQTiaddkM7A1MFhqDg73i7RTV9Mr6PRkmo9hTYNU4h2PmeV4XbP2cHawAXHhsYm2S2bet1L7R23BPTG",
  "key27": "3bR2SwtxtPj3AGhctkQWNom5uCTsZCwKiEcvqcSqD1RUypbL3E29j44YFnq79ediM8WJkE8DHeByjSA4KPdjfpbq",
  "key28": "3zFquuJeburxzmVbDowLLwJAnWkVGwEDwk4Z6R7Rj1u9yiZNhrdTLSfYfSFYY4BMsERPzKBrANP1u5oR3Wzbu2wF",
  "key29": "3dp1uEF5WEumAEQFubfsPTCT7pKUVjhPygooG7SjypnFvJpEvHDfKNc7DaVNAcSKddgvfhf2dbjHQ9kazeVknS3f",
  "key30": "5PWtQ31dV8ZtF27mMj9sGYFgQ86tCUBEMb6eDgzwCVg6TtvnKjnTpoKhrezuL3uQDNk7h8ZCbqGu81AgFizYGY4N",
  "key31": "P8St2Kddjhrdfbzi29XHCm3Paxpd9YXFPvJCuhSXaNNw9XhTaGiDq4aVxyWbJHKKPjgVczFSS8GajDZKsrf4XoN",
  "key32": "5EojsqK924nPK1Wi7dAtcwjak1qQ2o6VcBYY6cmpxb54LyjqnXw9wehLPtyftZKE9csS2tsFggMa7QbY42VJtn1N",
  "key33": "3pXRm2LECsYX2HtaFccTTdqoZpR6T3KKPdExSHmxn8yo9gAhpP4BXMNfP3e4G8Md31n12At7cucvmu4Gn7Skb6Ky",
  "key34": "5Y1YGRZ9JnV4M8mgHqaejQswdn2LJapWCJWENHfwtWJRS3sRnesD8LjrvneqJAibGy4Nqn2gEEXAR4eMekfT9mw6",
  "key35": "ZbiWWLerr9nTvnQ1iNZT1CQSbJHHkVoSs85ghX9VabPmybYXE5nQbB9Cx9xuUEhe7mcsnNPUiMYX7iPED1V7AaG",
  "key36": "REMAPdYSBCHsHhYN69xVjSiS7AVG1bbeY68DFEFPEs3RKTJ1ajpvRRNUuZeRiG4gZqwywPNrjBVp5LV7MTekbth",
  "key37": "4QZ7zxrw2iKsE9VEctodkw2JiQaST4kXv9o7MRAwCP1n2CzgECrocy8mnqD9hSGSjVUddiFsSSpYVBvkYzkA1E3f",
  "key38": "648FSFmXmuvDA8hFWzvokow3KsLMbs8Kgxx2PBzDqp2WviKnVMLVkcMC5HZHoFZUnZy9YHvaCzuqeA3NEGAPt5vz",
  "key39": "WgZz6aoYSCNzaKv2CSxq4DfDz2vJVsNXWDtB8b8gSZDopXR9LKtCLpVgLe4SxDfHWDzMsHBADRDunS64Bpf6oXz",
  "key40": "4CqeiNMmfLWxJxDbtMnnM84yMuzwQo7atTg3CupSnxyAFMusequ2HN9RFozzNyHNs7zb8NASzfRV36EEPMeNrfZb",
  "key41": "5fUptfWBwm4YtQFfNRdUJwjPwGaC97YCARfMA6aVKeUNYTSwbVjSDEgte5UWFcsckHAZyHnoDmZNHmEtxUkZeM4D"
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
