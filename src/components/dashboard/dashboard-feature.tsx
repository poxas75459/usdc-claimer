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
    "5k4FwUyZUanzHhwgqjMJsHMjLUhz4PiQZfD3wTHtnjxXrr7m2sVTtV4U8uGnbGx6xF9uv98iMCp7LNDLwsuWHxvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtzUu5TKuzbUBhGzofwZKoRm4azxgUGtU2xKqMrvvo9DAFu24XgQM4yTfJEdnqFRkxRxyJLR9uDazcJFasfKE34",
  "key1": "4n3pgJE4QAUV8g3K3yGyoxUNVHG7DDCup6QSQCg9hrsEqRgiHk91EeeMf8J4BA8N5PaQc2RuUtF4aVBiBeqVtc1E",
  "key2": "4XAtAuGXEj5MdKnNpTjaF1j9FXCpTENS2XtBHrSjZwbi6BesBu72482iVHrebc1CGtLAe2Ft2kVmjV4ZKsRN8J8p",
  "key3": "3DNVrvCSB8xK3gch5gDTbweeQ7oue4qfwAUVmyMqKgJ1Ap6pD5AoSV368vSJpJQs5w2Yq22NhjyqqP2kUFmCwWQi",
  "key4": "3dQzR9FpVzg3Zrs8FfAAyjKmYaku5tBACFyTrfv2ye6rVNV3CCG3m9SaWpguvW6xy1GSeX2dgJnAxhV4Wh8eiMHB",
  "key5": "5Wc9a89sf5uepR2y9xrrUvaiGhDBQr3tQfaA5iDtDuuCjeqnNSdTbjj8xMiTgr2hHfKy6sKhEhL5hKMTXGwM1sQZ",
  "key6": "56N6GDn29fg6rK1PSS7bmLFaWGfnkBM36EmQMefVrHonB9emuDtAPK69HigVnyL5azZWY81tKz6pUTncbhM3545o",
  "key7": "3QKWqvQSG3Vtk3mNQ8UbjA6whoxmEgLfsg2aCpDqKqC3KfDZzLjc7V91yaTWdfd3LCKoZcAwLBCcM867nPncM98P",
  "key8": "3mrJzokFGGXwocVyX8HEFBJxFMgUatTZbSyxSsaZuxp5AmShgupQxuU3zEHuCaPXpDZUDNBWENwA68JpSSuLoLqD",
  "key9": "5XehVjYWWJ4zhpbqe7B9xNs7M7En9s4wZfn68YQyvwYKKN2V9hrsxQDsbXzmdBpASy86V5qmZb5SiXmv8J1CMHSu",
  "key10": "4VX89sEkPTQDMAjWAk9jsVwgvkXsH4ySZf45GP8VxAgTAif1D8tawgstxHgjGtdDTXnKdbnHJkgVgSAsC6RsrrbG",
  "key11": "3MUyb1BmwZP4oA78WecdiR5dVgTRxeJhn9YCDteWnu9LbF5ff57tMUFBQGEWbPKnSBSzWo1SbmhQW6W3mYz1KPET",
  "key12": "5hwzRr56Nh1Wd2222uR5qmLyTgDgCBoqQ978vrLuYKJ99zZmFfYK4XcpdQ4SZSJUbYH3mPF52Rt5N51Cqu254c7c",
  "key13": "HNyFzc3WzA6zCdL5WNovs1ZjqJmxVHCeY2fXYSoBJyNMpur8pJswPigk7qH5QCcb1qC2YHnwoE7dLdsGARmVq6V",
  "key14": "4jcon1WSrxQsiZ4AfroXSYofcGtPK7LbQdvZC9ETFTTmmfzvEJLuvidAU4byGVLEeYSLjB1DGmfokWdZL6Gp5SPU",
  "key15": "34sm6fj6n54ApAKmUa9rKFL6tXPckHHFN7pBhP6KcZ5u9RedyLrSYUZqY88CthH7VEqagr1nSewnHmxczako5CfE",
  "key16": "3hQykHhYJQR1Xo9CQLAynx3fudDZaNLNqbTBmfKPsWT2ueDUvEchMSevA3YV8hRgnNwJqZqYvDJvTUiHfSA5fSkU",
  "key17": "4haJi9TELq3hb7C84rHzCoYxHnTGMcP6VecYayjiq3QxRqeiJPLA27Fn15XuaQAucvA8d14hNV24cbWjm8cZrcBv",
  "key18": "4jPRQ2s1FWy5MSRFd1UFZkKgroFPZEkSYf5uybXFbeiQogoLx9YHFLZEvxGMNG3qru2W5xSJptZ9Qr76EzuxLCUo",
  "key19": "2NVSWukXAKHvnSz8o9WFrRcChTtMrhwZ17ekLjw7PyJWZb3py47Fhntz9EhwtjiJBzrrncZC2iTWtfXBNS9sVNyX",
  "key20": "5soKaVRnZxgJinJdhhgJ4Qx7hCWUT2dXTfKoYngnPAdccvYMqrd9hFNimUJN5zoh9FM8mtvcUcJ2nLJY6S62171f",
  "key21": "5m3qmgHd7uoqFT3owopqLgtyy1fmxjaT8KScfhCMgAGZqcjENGkDS4TbtQBB7rioPr7trq8fi6U7c1BrKJgRXZQH",
  "key22": "3ai7eeh89Hwdu6KtYj87V15vKiUBX5gBeEpzyvkZ6G1UqK9Y3yMWPTXVZ4Y92CKMqYV4i7e5acWxmwyxunbRxMnm",
  "key23": "Waq2s6wj6utixfw5rok5s8en1tr8VYhtLKtGnbUJWMLLSKzYt8ecgyBzeazFhxuZ68AazTRgdUQDRrCMVgAd6fh",
  "key24": "5aeMG7GHrYmhiJuu3gQ1GvYsGvKcUWqne8XS5eu3YKei1X8mrnVc5G59XAf5irVLnjQFaazC3xGdiSsoGSrPHsDw",
  "key25": "2tnyfoyxPsQmYxZvutrk21kcnAM73Bou7Q53sp75hEMvjMoAJ45DD8ACvw1YP3Mx5mpTFNNR5ZQN2rFaFG83xgrD",
  "key26": "8rNjygMBST3WtAsWTkgWcyisBTadSAjg6w7BA6STfQTJBmVKA2CC9ygcHQtzkcJCiJdrLMfxEduAwwJP2JEhkLG",
  "key27": "1UX3hzFZTSJqhfhh2x9WmXnaRyDNNrqzcDMUBDzrGmhiTqdZ5jgrsvSbZ1djugcRnQipfjjFm1Wy9CvUEgJicne",
  "key28": "2vQ7UNPD4a7g7i9Hua8sfYAxPnMs3bkzbroHBv4aPga6Sp843p7Vze4uqDEmY15w7Qk33AAu1oChidX9dAAxC1TX",
  "key29": "5HGw6Gt771sBJAg5KUDgrvG2TRAB5dGhEHpHdMEptDvhL1kHbYfUXWHYBGzNXrgQVzBmLqxMHcNNurBbTkrXSgow",
  "key30": "2vmCkpyhy57pwLU3aLf4sB9GsQAZZLVWzQUzDVJaeFjxbZ4hYHWhuim8yinWVTBvugTmW4j4ALbQGadPXqY6yiUa",
  "key31": "5VLmMYM1zbiHwd6uhZL2CdCBrNupZ6JikrikMxYKK6ndaxGKuUKRnK6n9VJ5zPi5E2kengp14A9Pw32oV4H4pnvT",
  "key32": "F9cCdAGgW11WwdiLZe2DqoLLwrVpGHHRv12mSj2ooaeu3vnCXkCkHk1Jj8c4aUqkpEAJoHpAPLhehsCBPqQyzXB",
  "key33": "37MyzN94oLUoPdpjsNpPYW63gYF2ZUqoKcx1yCAF6i79Fixmu4pHBGn5tBtN3JQrwTAZyWZ25i3q1u8oytbzzWbY",
  "key34": "2zSgoserNkg9io4K4VYJjyayuHx6dTzYUfu3LiBTbBhcfWaGe7zV4urR2qBk6qw5cTShh17VyQ2QxHJLD9uXHTB5",
  "key35": "cvtCbAgHST11s3NNR6LhRoN8gXLxuDPBcGLoVB7us5agwMi1jBgrhQWK4SXXUrRW513isC8JCLpU5KWzFEmk57C",
  "key36": "5zdZvUiHv4bX16D3EfKakH1DeApcRfqUxVUnMPQNA7MryVht92JXsYZD4sGpQbWhSetJDgP5XJABzcaEYB5r7e6N",
  "key37": "KF23ENf8XNo5EeV7MX4Da1a29EXWqZeVqYVh4QxxGjBRoEtThCXuPrykJeoCNgczCHqk5Sg9y8dHmAesLbN6KLY",
  "key38": "4SxhTspZNWvAZNfBNmKCLzsiUcMXes2hCipyKZWjGHoqMXPts8aNhHBKfsFXacopKnJvY15u3o5GB42J8zYnbFuY",
  "key39": "X2wu8DSrDGyAtpNHG7UCEU88f1MyXEo5qU8QZ3ZUbkGDvmAcmbGTGof2j4YM3i2H4qWPFW9JM4JbF6MXsHxzGEt",
  "key40": "5FrToRXLEjGws6uum8FF817Nz38Tm12s5nHgrL1S8GqieGVdy3uoB6MDj2nxKb87wx9G1zq7n4TneBQMEczVw9BY"
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
