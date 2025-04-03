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
    "3BzKH5MhaP8q8K34cyhwr7AgkFQdTXHRYrmFBYcixcM2s6nsZCdbRW52oMZvr7vZ23SP1vUUdN42TJvJtqzi15Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39odknhFziHsaguywMLuFqV5FGen2q7AjAUssz5P4z9yf6aPNXtBEexMcex46G7wdGbGwVqX7Ng81GuoxvWtrQog",
  "key1": "1T8RupGxf19dHS3kNPeF3KuCRD11Ff7QszpKm1RpAN4BeJe1bFddm5NAUm2EynAyDodBbDBv3Cfi7bevD4Ac1vi",
  "key2": "2xackWkMPaJTSkJ7A27Tmq812ErJqru8biQAYhZXWpFhpcMSbZkpUCD6uCM6Bnk5P4h8ggwrwUyUwnbSCanMnpqL",
  "key3": "2VdLivkxKH165VDgK94Mwm4VDN2rjmXMYMVFA2ePgYJPyXHwJpvkK9oCVswnb2B98R2HxyLmf6KAfXt7rvbtoDmE",
  "key4": "UmHvoi4KJJmiHJwK9M5554DNsywUkVTRAnwodNVaFZovxkDfTZBNTEszqPCFLMwVzCsjLdHV1mPF34L6RKem3k8",
  "key5": "4x4RWu1g33ueCeujvVHdoPB2gyronsT4YxWeLhbRmXdrerjNLxZ6ytLUUPi2kDkV9VGV3bJthdbhsdjbzHaabwg4",
  "key6": "1w5qSbHTLTjbEup6RxTz3n5kkF3C2zfsxGWKaRghn9x7UpM9pwpoktS51FBZ3vDhvriaDcitPeML4PtJuYy3ZsP",
  "key7": "JkwUKBcUEj7egXwiqwqHqNfZzyA7LaZ7L7q74G6aM9b12LWrxrRWS2k8wzesSNBXR1yFi6nHFarfMG5Jb7V89mB",
  "key8": "2bqHRQhyBzQbiByZBwAtZ2DdxsuDB56RttUU5ZJhA9fYsgfJ9G2gnadHSeRbsMxF2Fpos5dQR3auFf5e4NPTCsba",
  "key9": "45nvphCeR3UEY3sn5h9oD3XjJk7LmfRG71DhfKqZjnvRq3ezWRZtAfS6DZShTiVa4dXN8EkBVToicjsXfftx4uTR",
  "key10": "3XcJXigKtMg89qqyPG3owoUwxRiZD29KmSyLPVTn82ugNyqYobBsST7tC3TVpfnoAsobTMxMWPSqACMc4FE1qWMH",
  "key11": "51FAce2iJtQoshJWTGmJLtxPG5322DHSnwyfuYwciBUz2tkEnaMjZqasoR2wBJoGkENs7QpEkgYizNhQFUasxcg7",
  "key12": "4jRFFeeMfgaTSsyL7QTvjVgahojCP1Laq37g72XJ2EUkQ9NufGW5PkHUSUQZY1j29pT8PADDU49Rs5CxPVgzh5aG",
  "key13": "2pfvpPwmdBbBgLtK3BeCwYAGHmkdM7f7MeyKfphjzKrjHCLuN24uMy7X6iGYYGgBxy3CDMXXWNsxSCCeFFwNfRjZ",
  "key14": "4cWpEzp9FVrg34zitLj6PZ2AimcBubpFBe6PNrKgucRAWkqVRWA51swnBrzyNkJ8ccqSzXyqxfmL1XVLVDz9fCrF",
  "key15": "5UpziiJ6f9KUQC7oj6BYnr1MDasjzGpZAcPs5ZtZ9LJ5PzHM6GAeHQq5Y6hhtefh6zJMB2pzQmadaTxHj81HXKxJ",
  "key16": "43gdjt1xNPUTaVa6yYSfNsECqCbEv2Y79LBMPrb7kuRCzgabgNMwjL6LFP9DrA7BnrrAH58uFrADnptbNYdXmgSC",
  "key17": "REJRfNxcDFzSZgzQQpXa4peGFLkGN11x53pFV6uZY5aDoeoHdwNQ3i9rxNpX1ouSkGzQ9vs7Qyy8So3etAkP24R",
  "key18": "3fCQJyMfJK4Yy5rEohRa815szB55aMRvFchY1GyKQF6Kc2k1LjRyQTKtgwZ5d55aGPc3EM4itPzmoyZsExuT7Tsj",
  "key19": "HyRH6EFsJCJgvLtdf92jAa5euqQUsezgZdzJtjvDzG8DmiRMwJAJtUKwUZBWrtWpQ5jt74Zg4wdU6U5AhqqGqGd",
  "key20": "BdbBdLHv3XahAgTgRYYcHPSJGzgqsZ4XvmZP8ds2AcMKbdo32HzfeBVcLgadbRZqf8Ddu2kiR7gRFw34SvWQsHQ",
  "key21": "pgURir2qxHtTsZbazsjaxzWr3nN6hnEK8jrtpRmpQovyZ2FdiRPTn4jbgpFHJD2J3JGMch5EoNSFMGn52SFa25h",
  "key22": "3Eu4iGhdj4iurn3pdJ5HK3CP9RHCvWjbVTRTBx2RKHcDJBQHnWhnTBqBFVMNoscqb9AHqVqhus5TVbjGH9yd6Y4m",
  "key23": "4xfQHvGWVNoL2VhaGw69n9yDmA1MbGRTz7bM35inYCbGzX66DgWJJBnD3Hsy6QAtn2oWiGpqY2xYSWZj5EvcNJ8z",
  "key24": "52JQZ2DLkfy9Aa9oZuA8mjHWK3vcmWtoKBEqKdFymvQ4PCkkgsPxLchcgYtCxWUFVXeyXDiCog54nygzS99YqG8s",
  "key25": "3r5nA2D4mv54wPvZ6TtfnrvBR5JnQKDuHCAEZuAVCiM7qXv76JFZ84XhWmZjFf3WjzZQ728CWa3jUQm1CqArEGnE",
  "key26": "2WP7fyhHR7Sm8feKJoJ4wm8DjjGFSmZik783JWr8kpdYGY2EkjiWHP9uB2HP2NxrkJtUbJ6p4pYxZGqQbugoLgbb",
  "key27": "24hywnjGB3xgT4PfkAQc6Mdne51ecZXz63ViWZDtZMZc6dPr3TMAHqJpdVj2QFBoX73sdKucSgv1J5Uf3kFiQoNj",
  "key28": "4Y8dRLTViCtVE5USq6ZDV2y6fPUizgiYee3YidX4tKSLF514XmoTFe6GqKG2KyGaLmgdtBbTLooSUVYXE11nGEd8",
  "key29": "4XrvwuUzRP1uDe675gzCshhQhfDbvewejnZZ5f6hGnMZKK6j5fEYVauUYwcEe1SGMnXcHgpkt7MmwBu36UmDgFGW",
  "key30": "5cJ7vsxQ3DhucGVV9dnbjE6AxkyJZY4NTyxdpNd7GoyHUBGva7T652qPLN4SA3GtgBL3D8zzpASNjnhPySQojQze",
  "key31": "5ThW1sGCAiHBBPHxFD5Ncabhb2fCrD23fnDhb7yQd6vAKP8EUHVYoNGqnUVM4sC5oKmxLngCe8DpW5JujCtKEpVY"
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
