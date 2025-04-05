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
    "4KWneBrVwqHzRFZrJyCcmAakv1QTfjfNnctckA7rrSmMEHooCBJQdQFLGyhyZgMuaEReau6HaNGPuHCjmHesC2nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdjYnwEg3W7hypSpAMF6NkTzXSfjvW2euEJx11LLyGXYJpDjXtfscCwnEeMkN4iyM3MC6UPKAkC7nkQkTxQoWpU",
  "key1": "AkW2vczddtZmakTbhXb9qNB7CQvLiUHPNiNvhxkCN8SSgmUSZBS6jSiHdPPRRUKWMLXZwFiQRn27uSvzBmM84HK",
  "key2": "2wEqr2RdLQujHUWorWgyGABrF53WQSpRUGr8XXvXBmxVE9Wx1m5ehUgg8txVaw2E2agMXjm1G7pSMZks6xS3VWkV",
  "key3": "2GS9toZMAw23WVdNWNYfJ8wGNLGX19eqcwAuUdkJsnrKQzV3L7rWQwMePRmGD1QaJcBip7SiCdzyS7myCcQz17GT",
  "key4": "3F6vdSg7rKKaYh2B5bvgXdNd6aNMzATjn1EyeRFHHMbE7VYoi4Zb34cEPiUfM5ZN2GyXymkN1eG1yenUomgFKDkQ",
  "key5": "4E6LexMr3afSR6otKqJ6SRaaqZDdQ5yv9MKzZxdpzr1Uztz4uXN6XFrvkpg3f8xRWuVo8nG8k2oWbDdTyDXtq1AT",
  "key6": "5CwEmRfoTs8BAxrs5o94nCXLLUTAHVTXRi2ANXZBUAk9bj92ZriJtpo6hzpwWY2h6ua7EUzNuLrgqKKUfrd7ig5J",
  "key7": "4xF6rmj4vChrr1YS1JY1PhyyNXUE8oEvUfS77EzdPZZ53orUKNDWqoUqvP2cMsnZNWQ26mT2PMEvRspt6oYSnNwR",
  "key8": "4XXrgfNosVxTk1r7MHGQGRsPeTKzYv7CizEVFuoQjV5Rk6S9QBFbBCrZWQ6692EH4jC5qa8QDWri2G8DpNTZQFPC",
  "key9": "33XZLtT8azZ2DSzQtMvasPtaTjgqDqxwHksQKAZ8YPv3f6nCGAN8eDKRRB6sECoxbCk6D7mtwqf3zS31WSQSgyFe",
  "key10": "3CEoLY6sHb3u8CfJB7JTo5vbQAyv45g5RiuRHybZx4D1uknugySc4wBAGNv4K3YLjnbGj49AmTQV66Z5wrF6Mxp8",
  "key11": "3iNVRFXgQrDHAgHHrjMu57FSmrvizeapE2Pn1z3cfTvYNzsavqV5Js4X12hMUgqxXBsEm3Ed1LQYsDjuRPB8v5m7",
  "key12": "qsdgn9nRNJbiGm31xxv61hyAav7YgjwjTXqbWbqg88XiRMyh4VVKzpzEomjmhpepL8p1yEaTvXSD7iKL9gmzhTA",
  "key13": "5wYRMMvom64Riz4dLepMMqAJviA4RbrpuYCB4yME6v4EFegq6GGYiUN47sYohG9pBW3HYn1vYpCEA8F6mzep9RT3",
  "key14": "3Amov3BrecKf7ZaZxtavUakAyG3zStVgaZAjjdeiunNkUfyPhazgKTtfQgsVvFR94YzFhXyzqVzYV6QvfRYdRza3",
  "key15": "dSUkEfdJJ4o43bxascW8p36aowCBNzLvTLGHcBW3Pw9hL654y6iGBqhwJgPtyNTxQ5SQaepFdWueJ68nekcdfsd",
  "key16": "3U7FC4dxzEUScfpP4Qmhrhv8Fh47VLup6D9j36b76Vhad9zV7p9jjda2YEHz8goDwb6RaR5ZpfUa3uTp4ECU8t5v",
  "key17": "2bnymhnxo4RbP56bY2UeuiWXnaCP5bXiMph7Vq1Lb1namtdTYeB7zk36gVZBufKaDbo33VodoXkre2NAWjAHpsPb",
  "key18": "3vfMJsp6gyapMRvCTCAPRszmsMVoHHQcVjzJvfi5RxSQvvFWNXm76PBmTkGr2QFZtAsN1EA8cuhinoiiYDHF8Fo3",
  "key19": "2LhzhGYgYyPGpAuUSDF3pMbiXTrw5REqF2pgr29CyLPdzWN3x3VtBLbd9oHQ9aDHUhtUcf1ALB3nqwfzQMzNJrPG",
  "key20": "54V9Cg3ay7DUcre5V3ZxQ9s1hBBMbCLiKyoLhA1sXomPSYNeN6sWbSFKkYX93jZQQAQDarzt4aHukyJ1PNBB46Fd",
  "key21": "2NXpDJbBLqizidVuqAJjFEunnEfaiKV6KZ1vHAKnwi33wXGTWC4ZUdGXhw8JguDQ8gAj4EJmjBqoPByW2FsevEyv",
  "key22": "3Uj9ZmVJ5mDWdWgQCdnC9ZQbFVW15A6aJKjpxhqHuouKVHPdaZpKtVbayPVr37enGV3e4R6DMhhxXRLaAbRN5pFX",
  "key23": "3LWzmGbGnhRc9vMSbKHafYqBJTpCcNRzdW1NraZ6E7p9Pyoyg7411eQ5hxtbnGfFrdtvJGGtUVWC66nhTk8Sce4T",
  "key24": "2Z1zA1xZ1MWaDtqwFMShKwEgGYyjbNSdSJbWTh5Cnf5S9fdeycuwBB7RkZNyMD1CB1BQBnk8JpWXTNK7gbbW2XEq",
  "key25": "64YpNhoHY4Mti7VpMUCxRr81ZJo8huoxBGRoxRMxRpvNrspk2bUpVe5ZQnRsqJgD4oGXx3pFFwfZV3ow28SAjtfT",
  "key26": "31eVsGc9B23kQCGNnz87rCp9E8MAMKN7UPP8g58dDQmrj75mTFXV8Pu51eTYNyHKqwVojC6EGuWE1ctYhyjPSZ6k",
  "key27": "38rFhETds85TrFnFHCaXjBrnR7MBsvZsN2NbfwrCeLPYDG2VAHFW8VRkskd9ybMwtxBrucVngPRdWczgp5WXi3qW",
  "key28": "4mjZhZh5ZP4UFPLU58fvQoNvYkVQcVrKH8KUpaUzi4x1N8k9P35SF8tDTNXo2BTGukzakjaMgm4ZUzhv6X8Esvjz",
  "key29": "229edCNqZ4uMttaThyVXjy8sbfwyXa47MT9asEBXNLezJqFsuBcUKjrBKf74jJXeLHSxF6Aiy4tCsLkFVFTJinrn",
  "key30": "2c9QgaWFNegUNfmPUCfpQ4XvTquUSpjQTeVdpEcYiPrDUxT5vDQcGUpCgXws45KPy4gEziHtFVYLauV1v1tBBXYM",
  "key31": "urzybUhLo8eDwQxVpJeega9PMJGAu5cdwF3mY3LoG6bcDcPyxtWZvttaMFdSuqmueJ5Cd6HgpWDhYs7EPGTBCGR",
  "key32": "5Hspw5VaLe4Tzn7VDKsnpKP7ibjg65sZG1LkQwM9PRX8SiFdE29pVtGk2zuyCcHgosHNZKZSpg9N9T4uSVqy1HJL",
  "key33": "5xYKs6SsSXZAFQ7Zks69QHe4UM1cTzeM9hYkd1CZpBzmsrt7wquU4pXKsQNDPFjYfvJnEghknhQKzxxx9qWgvuHZ",
  "key34": "Arj6jZjabzUNZVnQ8w94DMeuAmW9rSCJTtzFfCSmg9ELSNRhCdLWjkfARBEwMtfZ4KjuVs7vADWZYehWRUfRCpi",
  "key35": "2i3n5Z6R7hrGJ5i759TgrR1UDkHDwxYKi38LoiH65HaXLb2m1Kv3xitVLMxh4jLDHvfMZ4QFEXYeFq5YVpfiaiPx",
  "key36": "5UwB9cF6DT5xUWeHDTPiUovMYtB2kJpPT1SofveyDWAsYF9diXmsL95Ke5TfYB9YZnDg86wyYFMBbmfovFzwLAmw"
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
