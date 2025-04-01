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
    "2jkD5a9uU2U8Krcb4XGy4RWr9qPNgUz3CPxZhHfZ3o8wUwMKzSU57eX6dRYtzoe1njGWJ5pPMh5PfFjdfpeS36bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJfj52uY661p2w8gFUm2BSd6gnbzVmKKKssVxzdQY5qTWFxrSJKntgjtFR7YtDyuGeBANoXsZRv6TLAadDZDSDV",
  "key1": "2U3CtEUViDMq9J86XsLVnaw6RzF2dPh797abmViz9W9zeKtGj8nXEUjdU23aQUAAvdFf5CPjEa7uheJWGWgnHHyH",
  "key2": "nYy79UJzm4VfPN4vfGhqCz85sVtQEDPnugQxuuQkEwvjrxMyybP14z4cSuGwcUtvceqqd7348wgsXwx5u1CgLBf",
  "key3": "e2fPB8Y1mEDfR6joxGm9gNrGZtRb7bJHfiJRjJxp2oFUFNuQZMVKtTi6pa6ps78K1PL2h9SFonAqs9NX2EHpj4i",
  "key4": "onhH6wuUjN8tcwjjVvJbh51GRUKX6x1bxVUacYivRkaH12b3RyeW1XJ2f6k9CxewJhmmz2RJLTXaj9utMQkMTWz",
  "key5": "388wbt2oiVCC3qtwcLjXFHG73kaSZnxaxmjFM5anN4WwhwgUTEMB2oGubuynxJ3xRuwCSNNDP2suMSbSHYcvgtT2",
  "key6": "64beaiyehRjpQqc4Ec6WWoyKfEkGHHxLDupdQN3fBggRSEGJTTcfQPRvTohvjJLxrWJNnTX9a6LG1tWM3XnQo8Hr",
  "key7": "3rrJjpEEbGWfS6QGLwYtbGnfp7ZXb7eTGK3ZQHC2XAFnaQGhX3PuS6G6vzP9yGLRWmu2CXbFcRQuQqSpXTLGvvrm",
  "key8": "3s1KtMhG4YGpCn5342dXnSvSp9fWQCZCffo5oNr6NW24iw2ubdqV79E6LFJEVNHFPzvBTvR1ZyX7vZqdyzq1JhmR",
  "key9": "u7vx2C2q4gGk6DgWzsRyx1HsYRtNAoKuoNWFWsnYjaFynEFb85HYcaiwrbmoU5JLx1L2ZCjTswWaYXUUZJs1vty",
  "key10": "2xauGw7QNKjrWUqenwDybp8p4FZb33hnGyvAmb4mf8v3aMub19SdVp4mWaHL9A8gqPDeQjEdfYbSkKqE8M3NFRah",
  "key11": "5QoNbRyvCGg1KViN56hfteinB3qLyLQp6VPV9hFhLxQ8Uvimk8EXbe8NnYQGqnNLuHjg3QtKBAtYf2Htye2e4isH",
  "key12": "2jrjxpzC32vd3bsath5557kAzJD9Gaf9QWzbCNHWSuSa3UhaujEkipXuf6Veh8mRLC3K3XqiRjh47SHEXK5ZcQLU",
  "key13": "2srHMKNWN8mBptUGg43qCSyrtq5YbqKWLa5BuEit7BHgzKnJpkUbfMEqAE4EA9TFU3iTRWAdNNs78FNJrCJkBcJk",
  "key14": "4ELPaTwqhxkkWNp8BSdoDAecztTMcsyFX7iS46SKzGrzRopohaz2ArXv74tobFDwfrLxmVz1RCXMFunm7cRAx19w",
  "key15": "31u8Ro3FBhu1Mie1aoEWRofcZT1SGriUKrb8JyrfNF9aErJLGGgj2LaAnfmgpQH2j9kVbfDe3dB6GWNNL5Q9xcmw",
  "key16": "5phiRc1jxxxFPHywXoSdgHq7BCPokE7U9tmT23sXAdx96ANrQmxLi9L4dBN8ouThANFoKYApmLqyhaQAcG1qNV5u",
  "key17": "3qhHgywLpQ1FZLQ3ztV4VnkSEE8UFMe8GagCPM6VZrqvFMJW9DiY97D2rCxW9ZUqJxbFz1yNG1Rv1zjBjFM5BGky",
  "key18": "2o5QK36J8bg2a6uVbWjs6wpLZUsmjk8XCnFSUf1uwZhRjKJX1D5zU5DZLUMJzrg7QfTqqcDd7s2GPm3rfRea8ogB",
  "key19": "46Rmu32dSPh2QNajjZLBUQ3jZekZ19uvUCvPmbQECDNptw9zbf6vtnCzHuUzQJtPPjM9qpXqcBU74LhSLdNJCpPs",
  "key20": "2dMAuvfnHVYRrpjyFhZpFsfs684sbqwEfSzm4hcNH7p3BG1yCc31DdgiveT6HAvN2izonBhdFiYakiKRRThWcHzk",
  "key21": "2Y1kNjz3KaeSbCURDCQJP8GrGZmr2xnJXnucbSPM9iNTiP2eWAudZpH7stsgV9FSkdADYhENQCY5yNJLaR9aBxC2",
  "key22": "3U9PnDzhHcDeVkyNHB51qSrCkSVbiGUMTpwnmHNcm9NWBFjviGVUc9ea4du7UvKfT2s4STeiChA5j8YSwaq26cNP",
  "key23": "5MvHrpX9mx9nVAQwuWaziPHpywQCmr5rjP3MpALNRYiEb7dRUwM9Xk4Cbiu7MR6fcBYCCSkGsvmwsVvKdAe4ACGj",
  "key24": "2Kki5Pd91KvNf6iXMR7pirWpjbN5Qr9GLFegnMz1R1qjGcJj3F3bRX53KUuaoPf9RUoF7yeFwrK32YBd6rBsv6WY",
  "key25": "3JMbUaAAxgr8aMrWCNoa8VSerYJM3q425tEZdQg1GSZ815BgKU8ef6oN9PTeNAdHUBWWdmdVjnSRsuzs8hihfH4m",
  "key26": "4a9f3Lqa53WZ6iUqNMxbgFqGmY9Uy7MadyQH3uMiK5yJVtp3KiUDq5sQzDZHUuP1nKzXt3ifxBrn2PK7cJNEA8Fr",
  "key27": "qricqHZCftbgHPf4uMvqF3HJiVSnWnpq9Zi18H41hEwhjCBvqSBJQEQg4ZvHd2nq89LY2JwRKS3MRAvA7pu56Nw",
  "key28": "vCveFGiy8eVdK5zVRxCvTzc1YBe3jP4AzA4d3RVYE9kKwpkrjDwfahViQzrpbwA661pqhn7mM9r4gZAQxJhgj1L",
  "key29": "3TvuqMw6eFdLBWNktBvVydQePNRY7moFBrmRVGYWGDQGKG1Pfy9Eudv1zg3TpLWifQuirTsArLaDypB8FEud3Hn3",
  "key30": "3oj14RE45kNhrXpib787HGEHUMJQwFVQReBR1LrWWmf3ojUV5BZd7oN9n4GrrLverq8G4YwWphZzja61E2njaJ1w",
  "key31": "ZWi4H4yvuq3EhYHRH7gAShPKCwA8gTdiGmPbcdjT61CCpdJ3ZFttAV9UBuoLagejG9rzv6FCG3BpxQNJWrdFgk2",
  "key32": "GiQvWN85M3jDcShStZusn2pMg8rqkAsFZXxu1UdTTgj1hLTvkZS3HdYYtTP2JRG2aonJdFyEycQVAxNV5yLNQnQ",
  "key33": "CFsGBtvooQrRYsUSjbBCKX9CzcMtLBCDqhjACS5mfGkbKhbkDww6T6ZezM2G7Acv2TNFmHy2NMqGYSz74sicm69",
  "key34": "4JnAdAXbb1Q6m6BEB26fgKC9GcF1gDTQ7CGikqMFZVAnWdiB3SbWeGPFTfKoVQKFTzU35GyoFkLsgf1PMgy8nbFC",
  "key35": "3e3cShvh31wwN4ti7cLEXQjWKQXJz88APkWXhGMu6sznHoRRJeMSzSZ1bg2JwMVzSzqjCk6EHxwfFRMpN1TSo8Zu",
  "key36": "2Hh64fMLNuupBZr98SksdcgguaPAGcUC3bpLxSCJzRZeDA6GutwDQwu8G8ZHoPo23jgfrz2PYbPRNq8BqK5gsH6c",
  "key37": "3hR7UqBrp9oPkYvZkxSyeAJ8Z9kzmycq3mS3TTNhLkgXk8bSCRrDhmByoSCy7qvjPjy79EVetTPaaF73udji2FjQ",
  "key38": "2QRJQoTxHVcAPb337z5CkZy8rEfxQKLEYmu183Q83ZKKes5JM8PgouzJ2Hda9aHU35ckGAgLMEDMiPpgcDiw1yLQ",
  "key39": "2vmb64gnHnzkCp1MZczeRvi1HuL6M863uzo2HWJ8HQT9jUghjLMaQtQy787ECWk8pVzoYbEL3nqNzqdgreCT4YFx",
  "key40": "36ndFi2sorexTXQgntFiKf3tBf2KHTNri1RUh3zPyYtrWwF3Qk8xLLvkiz8HEaF7HL4eYYBwqobcHcrEN1oZWrig",
  "key41": "HqcRndUD77dgPjer1aCUSfrqBDLEarYVMWH6FER5iGJb4Tr5j8KBVoKUPK1LFLJJ3sHQdRGS5frnUgmCFV61SXs",
  "key42": "5sYAC19VBferTCv3afzsM69pfzcD8Bhhw4APbtrmpLsyfHbqN86QyGNPszumC5Ly2JHrEj1tQ3MUH5akYkckovtk",
  "key43": "28c2ynmV6NSCgPS4cW5kqUKtVhzhKAbcjMu2x7xcnpiLpjBdShqaT5i9DaFrDNsaHJ39iGSWZn3aRHhhTBHY1rzZ",
  "key44": "2MXgWJSpZGiNUPUSob5yHMx7CBHgspJcTiu5Drjs8ZbX7DPJBWTU3zj1rV2QCS3oGRmdYtaWGkRCaNWU7BrVAJiz",
  "key45": "5j6kHoTqWSHjWdHncoVufC7LUvtYQLsaGUzxAgVW5DmQbZsb8ESorij8zkS3ZgQgz7em7Zuj7HpPBLzWivqqzWGk",
  "key46": "365J54g7cfURXjLrV8XggwaqpuCLGJSW4xpPB3HgErpqk5Khj2n3uiSAH88TSAM3hdbbPKQ13sYAxFLYBiEcs8is",
  "key47": "2hZMbbsnes8cXizcvNGZj7d6i54xPufeaPTVBmMAi86wRHAroyV6VeBtPpeAfx1V8NRnFSiKL7XeZB4ZCnPJfFzt"
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
