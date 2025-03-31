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
    "4p5y1jbifamy2Aemw13rLatwhVfdxB4rKSjMHLgmFBFuwgUUESTij44NjMCjvSRPUSXKyLMGDiCK8GSWkEskcKSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGrXoBqVZsTiK5BzaBMfRAQMDrEaasZ1CwWGyPeU32BdC8f38BMQz2rHA2wzyjyWWG3jgTYy9RYmcwdGFFMxiwE",
  "key1": "5GyStBRzPAUBDoHvZWQg2uLnzMFCbkbwcsnB5b6Fq3w4YMPGAY56a2QXU55TQCaZQcEjSmKxwjCY1FVDP83LwzbQ",
  "key2": "8xHdZ4T88dkzs3hqFwuKoTjf3NC6NAA67hc7jhkjJ33ah7yxovgWvLkFTezmUySK1g1TJuV974XBnAKtHBvZUjH",
  "key3": "4WwWxBgyDezsSoDAY1EiafzJ62aMAc98rim9Fuy8GixPNP5AWsLNTZsAfizkTDKWN4BTJshTpi39DLX7sYs1UJ1w",
  "key4": "2JoTSkVFExGC1B6UcJyx9bFfztYfVvMQtaeLmR9sGeLf3v7H2C7eptDUXTYDrpEfaZbuNkmZcxA2SNP7y7QggPdV",
  "key5": "5WYvSP6BwR6zNUjKhJ1mXKUbi1appR7bJon4hpkjtzq4eTiGxMtoatPYgm58vpeM9HvgUkz1LMUFbND3nZhNsV1e",
  "key6": "5UsouiF54dGqGE6WHYSyqLBj7kTwvoMveDDuySB7zxaiCwT4DA9CS68PTznyfeJ7gb89r3XwKyyb7n5r1VierT1x",
  "key7": "5M2XeUNtAmxeCKXutYuSUYjbEdzzjJ1sTwyNRo7752zYKaNEuratUTNoK1PTSbXBRKghYxrvkzFrexmtprq61qdc",
  "key8": "3tY51TmWsdUCE8Ueg25jDuejBJJbPyMf2ce3aEBoWYkiQvzXodoJxLXPA2p251sshbrKMfdw1M5VbjNdkpUEXEQh",
  "key9": "JmHCeMemPhvyFTNcLaLNY4JJAyyqChF2Qu1zsEaMLiifBcFhvr5vrYL2yAmP4ZU6CwkLAvNnhP384S8VMoTVgqY",
  "key10": "3fe9ajm6bQAwMconTkRdAzcBdsZ3ui2fUPpkwqx7SrqwwxEEdU1ioPTDHzMWft4EGhcYuJzYsyKzTZYCyGiqcLHr",
  "key11": "5T1wKWDpZcggMECkJtgX8nM9mYoFGXys21NbqLNq2Yerjo4SLAnqUGDohvat4y9pazXFxXBjAcEx4XaJt5eEbzpP",
  "key12": "3naJabi2NTZLGw4JJv4oAVquLGFxGSdJuSS7X5YPgZ8zG6KxQQdBqmkzgT9Ep8b5EzKuVy6LiTAAjAv2yUt6Ptd7",
  "key13": "4JVt4ShmfV7B2R1gjeojKAo8W3cPuiddJPWe99cxjkm7Z9B3NtUDKLUWJThje5x2cpXG6fvSy8pmxCFyycNCZpaF",
  "key14": "3YUhG3g8qy5VhBTPRVEFb4NcXuB1AKYuKZXd4BKFWqQxv38kuqrjzXuAJMedckfxbNuC5aUe7i6VXtWQyHvnTmAe",
  "key15": "4P6DQJHdDh1MiXo7YGBG5ZamiKkspnm1ycbroTwkadUrQzks7S7gdXd8NeivYxtVLSviBJx4D9o3PUTXXwi8BFtP",
  "key16": "3FnTBBqPSUcdwfK9ekjhA6ShC7NWmhuChCsrqeXG2Uhd7tCx9fg7W4t8k2d6pvW37EYPXiY5PRKpqo8CpqBwpozm",
  "key17": "31CYUA4U93Mdo7fEMmDdSkqpruBXFQkoyQoSDSAbtJyoYr6wtbJLtZLJiGiM68t8fNBEzukWFfQW2X8YYJVwzLi7",
  "key18": "5UkdYbGbUabgkMYzMhrMXfJcYLgKfzRxoWqFQxUxd67BkHQDekziaarX9gkR2JTprNBbK3Wci3a6jQsA8ABBWQCD",
  "key19": "64dhN79MfcZxEGrWcXDZqVhaZsVaXNHNCHkqqgLhm2YQ8kV7eZtLkmMMKSJt2oubMMxWNrEisHqMnSg2cekJUyZ5",
  "key20": "RnnyZBS5r3Eo9AGuzmqjJ3cnMFv28BACSoxX9NVdJueuifEXQ8igv7STvCzdWLkNuEtW4Xwq3uTtbmAHveDesYo",
  "key21": "24fA7T3s1o7zQAUceqeTds5xwQjFSa4nw2tdCESPAx2XEAQUpHseX6RuKaugwURTijvpidHS4moW9L6wToBcYvQZ",
  "key22": "5JVQxZ2vAX4gYr5ygv86ieHSvobz6jEcvxYGNJtW2gk7GCT3Lgz9knRNQp3RMFJ1jLoS7Xv1jixDRk24mc4LDmp4",
  "key23": "4UaknLptiPQJh4rYDjgD64WFZLmHzneLYb6PGv6qPrwqMwsLcmmR8xEk4Nt2Q4TBdss1N1wpdwD4ALedsRHZpEUK",
  "key24": "4f2jyq94HUZtLM2JqonTT6JjnDX8hsYEdQwZYLzaQP25yRtuAMb7MbyiUgNojb5Nhz4UM6B5HB42wd6NrmpsH1jS",
  "key25": "5af2eJ57B9c3sXFpaJ22pduVbMZaPW8MHmTbFLGFqpgtiZEuopCLTRsoXbebsbfpqdkSRmtUsKbpLCSMd1BsJDZP",
  "key26": "2mhXhLUbus3JtwjGautn8qiQtAjeeWXL5okJU4Vkhmp8S2ZGPxAASwWzG8Pt8GWrcm42o5fgCGZkqEUQrXTbDtcq",
  "key27": "25W8jnGb9eDdFnQSD4awwMmqZ1dA3Z6RYvB8umkkW9v3HC7KBSJMP2v1DJk9kxNQJaXgswwmmd65QdVssNRBeCHL",
  "key28": "5UyFQwvALPJdLC5RGKkZJHSbfRRPNqNvsJQRrkdiWee6wZwvxXKTtbuBgs8Uuz15ggDWucPtFkUkQdzM2q7bXTrz",
  "key29": "4CNXSjHAosnYBdismabxGrXJUu8NEa7L577icBCLB89fEKwDpsafcBjQymfJP7YN1mMsw1ZiniAYQ41avX1Ej4pP",
  "key30": "2NrCoBBA2JQVAfa3Rm3R9qC1EfHnw5vEFALVGTjBcPVMaej14iPk4NPxoWV6CWNZMagPm2SQqgVyTAVFqXScGfiL",
  "key31": "4CWBiVk4MRRJUgQrXPK6kRB2gN84sYknhEFCCDxozg3PefjXDWMvPsxAJCBmbhocdu43ZvuZ77Dh7S83bQjkqdUG",
  "key32": "3X1DbEMQxZUWFBLDhawgFgGo1WbdeQBP8PerHy7gctzBnFxqQqks1rj4iHXWZeSnsk9b14Rye8jw8KEZZ2t1WeNW",
  "key33": "oRWe9PGsgaqsYPzWTQFTa5DY1mqkGhs9R3nWG88desSo2uSaoDcNMouVQoShGKYaoHNJT1eJ3TkAB8oXGb65huG",
  "key34": "S1314TRtn9v4dbdcZUtDba6XHXHBoqhEvmpJtCcGzaVcGXa43oaFia1bM8MZ3i58JMQSZBLHtFFZt4EyPfMKUeZ"
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
