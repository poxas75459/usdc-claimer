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
    "3eECz1WNJ2hiwoRFPQWaE2N1AebcCD2kBft8gSrvwaYodyCaCHcQoihTFCUAM1YYWd6yA2p7JdH1KbnprZqPzYVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWU1gdntqmDvdHBFQsvyo4fyitkeFyF1upyh4uciJUJCwRyiXtydJNdFddFZ48dWkr96wgtAPtLrtedGVNR2sGj",
  "key1": "3qTUpNVczVCZg16cqGVoYiE1jqw6q14XbmNSs2jUarPtEBxmDBGkvtxTMwhk4xZPcp6zsfVTz97h1mBUBzN64mtJ",
  "key2": "43onnbrxWhPuctFP827dCnfdZToAmxJU5UgAvvfD59ERyeMgZgZybC8Tq7KAyGLj8pv2nbiveJBYYdZG2hSNNzst",
  "key3": "2ZeWo9wxdnkjaN1YKqMAAk4Bz7Pc9nZW2v1xWVUL9fdZVkuxCpuiLM6W41fdwtggPEkEW7VG9tJZokwLRiggkinR",
  "key4": "65RsH1Xx3NZuHgmQ58G2beUkQYwyzKBXMNmMLAJCs8JtDCWwxHeQcsbCHEyH2BFpPp73og3wD99i7379HndgZeux",
  "key5": "1TYqVCYtUqrQm1DE1C2LuGC4uWJwH2bgck958PFhWh3mX8uwNZbTtj78rymkhmjNXipFw6anxPFGcpg61M8WnQa",
  "key6": "3mFL4Md2PCKYHZkxwv4fpVQzsBy74HywTj52DNuV52cFtrGc9pNqGSH7xmfcALU6cpLqeSJfC3wrLAuqzGFxvtTT",
  "key7": "2TuAxiLV18EEZZCKMLK6Qhk3WKXsapHZuaWCiRskFfPhLJrxiQKEBZKUsevoZNQvdUfks8SDKn3Zw3emBGZJydJz",
  "key8": "5s6TZGiJ9xZJLBaznrWriBUJbYTTbyVHTnwtjKHdBRGYTeoZBc6XhUjHNNv5EzjjDj46o5G8nNhXP2zM2Tb7bCRX",
  "key9": "Z4APW3nfN3ErAEAMTrYDCeqKeWzTLZvE12dT7TXJYVM9K3xzMY1SzgrNhjMGPWdNAzFRLG7MKQuG6uWLNLt7xgg",
  "key10": "45atuqoMFqfESw1nikC2KniPo7tqkyPAiCYyr3mUtt67zJy5Sx11gDYkyPYNod2ExwWzfRanWDWzWtEZ8VQj7udJ",
  "key11": "3qaAEGd8Sdd6ZqPyF3LeofPk8irpZvUV8guSUuCDzYRgGMSnGx743iMdn1DfZDHCZAk1rGSwJHt6GvhUETqwJERt",
  "key12": "53nFn6yXyoerCMAGcJiCYrXoapTZgaMz3z467AR1DCtNuEEW8nCb5VRNVqM4mxPsup7E2mcZwMiPJEZdXTrQjoM7",
  "key13": "4UDSoeMyRMMa5HseYB7XHG5k7jwHH847Pus8rxL3WpfZPqC1K6fZPBeoGryB9MXSTVqsCuF2uRCGMJddskvtTVCs",
  "key14": "2ivcdsjdwuUxj7fsfwJCL9bxNPNa8VpW4vZgaxXbBzoFL86oApR7Xh4WvcZH4djR3ZriNafbbyz4qoKCfwCME73K",
  "key15": "FoJ56kzARfzWRPbRn6K3BXTtDwSaBCPCwgLXrCWqXi1pskEzuBthiqNm3VLtmAiyToegwboYWknhT598rKemxEk",
  "key16": "3u5qAzBNLhkzpFcW4dSwrLSXAGS7Sh3uwodoWSLGGDjZ5fUjgTQKgXmegAGSkm4zNGyjAJq5THgAknCmXV8VyR9R",
  "key17": "5PZ65vDtiH6zfTMhGzSDLzq7tbyaqWwKnUSamZAyigF5tF4KVhLt5n6RJ7n6Na5BFx5iWHvVG5Dc4MzGU9WNaKSQ",
  "key18": "5vgpbLi4HxxqQA6R9Akbe7fqNhnvPoLzhfwo11nXXDJPbwq11Hz3v3tAnQUipvdmHVCkfMsXUnaU7zrNJWSpk9d1",
  "key19": "5Zmo7f9VYG8SPBGADCR5Car6iLyAzs3bzNxqaJB7pmtdtkTtHjkE7HRgDjTaSv4FDYAsgX345FJETEFxevzswV3E",
  "key20": "7K8jbiG4piida7DsJKy4UPsLy68FT84cDZzp7VHMEkocdseSTzazcR7k7kjHXtgVFv9mAGDXTLyVrq7iLBBpJzf",
  "key21": "2Ls54RgfCjEQD5S57zbrQmmfLoped49BmbnBftPfocaiNNbDe6oQiSnX38atHGgoKbeX6YiFzDA49uqe28QFHxbe",
  "key22": "5bXhxFnRme2cAyU3rq2c62acB39YVfhgD14zo8NN9GTstuVYfKJFxrLdJmz1dEy3VEexb79rGVHVn1rwmMcfNcE1",
  "key23": "3QELAZc1S1QJJ2t5AHmxgM3ykDwiUfeLH3G1XsPeDivqD55T6PBK4BRcTW8kqwTBcHPiRfQ4iUSf1r27sbf3UYYg",
  "key24": "4NnjdkZ1aeDdFbUATWiefnayoXnmCYrqgDWFRdLeeBvdh4D5TEsTwBNmzWaiCf6dNcek7BzKh2QvGAmqFhrfhqHr",
  "key25": "4qRgzvEC93r46WNxNHttkJDJdbW56DE6kk6efpV2e1fUN5VdEDjmmgFeiJjYcnvw62GsbTEjQGkFxCeBWsGVtnZm",
  "key26": "4rzhfcrE2CaUyGPUGQeSGS9ZvJZPSabbpSbyD5cqxGew45r6qMBtTjf4yov2hqRKmtwtstJdRZWwaxLHiZb1YBsp",
  "key27": "zanqFg4ocg3eAy7cLcgM11g3GLma3YtetHRPsvaBUeUjyytpyNbvn7VC9VRJkEc9bvdjrJZeFxFYsTombHXLvk8",
  "key28": "zst8pccKMdd22JEV3s8YBtc47PCF92ymfRK9pGkqYCKTZUUqGAyLfavtjHJVJCCdiHGYaxGRYtZLuSdz4Ymxwty",
  "key29": "26hTzHh1KuMbUAwdPxMWnudFLd4q1qJa1qvH98XQdepiDB77ExCLpitJowfMRL3KQz9PwkPDYhnPaR2mGez9WKBY",
  "key30": "4otXYbGSzEJwfo19cpnfQgUTtwLYDhBwUZc5uJYWjKoEzCV2sp7BoLQgfyMxcicE9bWmLZSVZFXr6SUiyvAxLZXT",
  "key31": "iYBGQVHpbuFbdzLrMcPsoFYF4iG1cHdmsQ7XDhZ6XxxShjRCSdAS223sKA8PT68zucwnByasMhmtCvrH6XfgviQ"
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
