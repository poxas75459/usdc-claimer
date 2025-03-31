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
    "DgbkLYccdgxjAmgeJHamKfa6yyzWS6hoBV3JUN4s3G9KYq6qcKrgknyB79apyy9ZXz5cHrXGpHdybYFbCkcxQfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yNnvyrZXQXvu1Ji2j47jK3WtaPtdnntEaggj57gCwTN9SLYHPTFrZsemEssmKeY8U1YcpT6exzRUrWrj7bnBx2C",
  "key1": "47ZRNgWFGiALjgNqc1n81bo18oEj3Wfgtu69GdKez6zEtXEs4xz9iAvuPQ9FH6qonuAonZ4j5sPPAhaPVt8yoFgb",
  "key2": "3DXXPLcMHBEuTjn4z7KcSy5rbyycmZTBchAyLrLmNTDvCKzwFwzY1roaSWFBYUaN7vdXsVKNLHcVheB49Zj1ZxkH",
  "key3": "5g4G7BoGLvWA6iNF1Pxc2L2wMtfkCmPpguvi37ESDbYiLNszWF3daRxAZ9bM8GWQWUqJVQAJyU4CzGW3yqjKXMPJ",
  "key4": "4WjJSbajEfA2Y4pUdkskFTZkxgxAT9v3nDTwHQ8SzCc13W5S8U5RQSa8cJHhJf2Wes3kMKYrNJXXLZDWYQcbVnWx",
  "key5": "5WhB1UdpUYyuasDZGaWvY8RfzQDKaA66DtdPTAxGWNUjaqFyb71X6uf8QBRAwDdpwgVSU3UJRYPyThPdSvvnJVzH",
  "key6": "2Z2mzjQTaLfbQdRbkZJtP9nupHbBzGTbGrHcA6oAQ6UVAwtbEeiGpYHiN7spfm8SghWyda5p7oVrGGQAAykHrq8Z",
  "key7": "4wFSzGUpwYGzViKqPDxFv7bjNzPz6PH9mFm8VbKLXdMQfpHH2RykfRunXRX72LjJ8SeSzM8SZkxbWNtGES91Jrdg",
  "key8": "m3T3RNaNgNi9myZhxoDFdocYujet8kBASWwJZXJZF9gk1FvsGdVU93Ny9yYjehLSDTj1Nq9rQVEsvnrgodtwWfF",
  "key9": "63rk7WAdorCD6YVp7dwYVkraW6CaxZQ3cc5rgE1F7VYABQiY6sMifjtvX5SNqNrM6Vn3RULdmfpxgtiQzmAXvMbj",
  "key10": "65dXHaV4vy2h2522t5uwdHqEacMNf1xds3jpnhmQjapwKV1SVrtnPaEiaVCQMjevrUQxntwL9g7NSizmKGBQKn83",
  "key11": "2QhFim2n8nkGTcXeBZgh4kdr9y4QT3Gdrw4foijDq1AcRNTWyPa8fqZu6wjsTqB1iTjbBZ7xCiwbi3sVKpLX6bdX",
  "key12": "2GAcWJ1cgSqnthbNGWURfV8Cxqu5FbhWYbwcNzRvFP1yG2KqNuxaVnYz3TTUxHfB5GmSudB586759J6a9N9jLXNg",
  "key13": "3ZH83UZmaQri6xyV3J55P3nELwYrU3bK1Dg3aFTt7Gv6p85rvmgjsuuUYeoXQfjwyeXoWLbFkvx1FfJ9dNjftdtf",
  "key14": "UjXLQ4Qn8sNukgUenjSwCUuwJVdzFLGVExweEkg9F2YTiQpnxnJWmiYpdzxyDywsBMeaoK7N1pQRZz4kmGufnzq",
  "key15": "wZizoCrZSjfv6QCsCDsd72RFRSJCUe3Xo535gNc8K4vcNXrsT6bXhroz8h66jRBDXPVfoiNui6cNQpxGoBzH16b",
  "key16": "4piW3x41FaDqvHMSNvTgFMErbSNhF6PwQmfw5YFd5s3Lqpc63jbMPXsSgu1Sc9s4cWDuuuFRanVzB2zPk7jCxsqH",
  "key17": "2JVmeBsx99MEvsMD5ACU8WYP5V81Dw5tTSFW8EPsTmSjBTyz1Wey1NtivvrATjLRfJxrEZBCAre3SfzWfM4nzwKg",
  "key18": "34oH5tzC5oxmiPc6k5Wk13D9B6JV1iKiwHFLTcg6YxAXvthfikybRxsRJKEaW39ceQviHCL4n6R9H36jzgh7vXke",
  "key19": "4fbDuxpZZWr7ms9gaV6ixHTRDJ9xTaRCkoGBvQQV1SmmQUtZUKaXcxEZnaqdwt1aVYmYhScFdPcy72rVqem7zmGP",
  "key20": "3vMMALdiyS1BrfrYxpPmTT9ohkEAFyxAyWqCTNrsqVhk37Xr2HW8QpnyQ5gv34zTjjpfgSBGSmKPCqFDy8og6wdC",
  "key21": "4e74Sezm7E5XGnMKiFmKydrsJhMB7XV8F9w1b7ZvTwiTbf3rNodoyKziT96d7av6QEsnzYQDr6DwPP5qB3wzShMC",
  "key22": "3KNrhKNKaQZHUs3pY5DGMVnpMFBXyZsZcRZkn2kaNVf2amsVs1aoMFneeCvNPFtodUWjrqLbC3swYqxurpWFVeca",
  "key23": "2NuDgkZuiTHb3zM7EQdBhfqLNvP8vnRvqpTCDYNCfnXStEFynLibSB2rumNzobQhBAWYZDZg2kFhqrCKrqnYnLmP",
  "key24": "TocAYtsfHBncfjwh5GJ2N6bL3cN9R8o1Ea3ivb6of2e3dXzNodT2eFwB9BkjxtoAT8yojYzXp4MA5cNXdXn1osG",
  "key25": "5ZJDscgCcdpbVzc8H4s7WV7F7FYLiNA3XBnFLuAWt2F2F4bAfPHbiXKzbh7dK9kEgYJDKdkLmxvNV74PUk2yj5G1",
  "key26": "2CmvDXbTuLosM1fovhGFhcM5vATcHBeRzb1e3huSmqsUNZkXjgCtb5YmTA5w8MgxkVyVyJ3KjhtCzmz12wx1aKNM",
  "key27": "44FEwcUDVbSN5kEkPVUzJhir3SUHmmRKwpZEynxTLjYBKsD2VCEV8rUBNc9jXA4GnS49auu7HPsfR7ioxN3zedTM",
  "key28": "611RpN1N9g3XNGXf95KuUnNQQoSpRUeXvFMPoWeBVqXBomj5K5CgqA3ZUH4MJFgGU1Tvu2AEQt2N2zFMH7MUrAxi",
  "key29": "4piyXAFmfoMKqBxnsj77Ewshw7JudrRT2nBXAfBx3ffHF9b71tZUxUyfUMFX77nZegaTmj6YyJMpHwog4wLgbBaK",
  "key30": "1VSFnyp6Q85SUGoMFA9z71Q16hDhM4jubo1rVejoSK7VPJUgpkC4abrNqHeABz6HNj1NpzB3tm161txwBbw61sj",
  "key31": "4Qpkeh9EbJZx9SQmwog9XwxvDYfDfvmgeaB4vCx5LipgzvTQ4MJrBA95GK7fgqRikRd7A5dKn7eo44ifQQzj98jK",
  "key32": "2eydyVmXXAa9beZzEzCeFra7dDuBjet4ZbNtoWVST1X7XZiwaouiZhtfRTbAPFaD39HEWiAdnkDSz1dVozNwqgJ9",
  "key33": "3xJSeBETPbuaM24H4txuwUMQ88kzZDNF8kHL2JRQVeQCkLuMTnPeHRcp38VUuC7XEmyesGgDkiCEb7RCmoYEiM6y",
  "key34": "5ueHT6kuSzwLZ4MSvuxcxG4tLaQvmen8QTBWXEAeVVBQKHtEEUsSZHE6fskd34wyj8qzYvZkwvCZwLmM4eZzsPNZ",
  "key35": "4KyTqbmHQLSycWKumwfRePS1WUgE8et8zvTtB5QtBB3v4vpktCidYxfWaWSSKig3jhM1FC9TtL6itoSoePEM9uF7",
  "key36": "rnRmwx7R7A23ehtHF422TujiT86Fwxcy7keMuaTgVdaLWsNZNrB1CiiCf3nv48XAkHDw42xWhJU9EscjUj7dUgQ",
  "key37": "3jenxdrT3fTejqyF7NaoVrBRUeE4LZy6RwRnV7DyhrUGAYhjtmVac1jP8K6QhN2UKJZ1EgDgUuAHTBgams2LFfJA",
  "key38": "5Vh3Gvw5LvDjtutfP8UUf2KC9wmEhbaPbpJRm5X6GEFoHfoVjqHRmsQtg2LDyFv3AFkv6GCa7izTz62U3De4GmmZ",
  "key39": "2cFBU7V8qhSQ3DYFmbMX3n12oDzLD5uh6rZEbBv5hc91UUVWz3gq2d2cM2a1ppC4HxrMaQsPkjqsGgVT7qDHC7Fg",
  "key40": "3a9bUuTxKWe6s3ioKBseqA2g74y53Z7sPmKybCqRT4gc7xc1FuN8DNm2r9XTfcW9zzkHpKyLdGQK62yswfkJJDYR",
  "key41": "UBZNXsuZi4HAtJjM9dmpRZzTMwGb4pfL4ivJLHLd7YmLphdFEoQ4gNu2WWoLjpxtY9FWxcb3jpFmXtsGyPyjohH",
  "key42": "3BAVSDRrVwSJUGWN9wFb14abGEoEkkekz9nCg4faFZFvKqLR4CGsV4hZmkvsqd7XZ2UTPu5SD4DuKbxzVyk8J8ej",
  "key43": "5LYwoHryvdorDZvWMgPvUXaXZyE2RkFgtbqukCnVt3PsapknRGHjGv4ViQzvwjyZEjdHnXCfyhtVrG1vtXLt2YaV"
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
