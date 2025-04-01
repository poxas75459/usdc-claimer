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
    "3DVg2Eu1JrfG5oRE3QaBmGKAuMt7uNr9YKXjBjXw4fgt7PqU2tR5e6cjt7bbpx9XCv8LdP2pwDvtj1yoLzHsqzhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E49zDZnHhsvMZAmGQFviRQPdZ9CccVKnkiW5YZjSG3uGG1hhjsRcfBYDpwJ9graY2mj6taL9FQu5UGduV1P7vhi",
  "key1": "4mZggofHrRP9c7tsh7BuC2mq8CdGpxso2mscWpmJd7nzdCiyhTvUdEAoUhY9oNpnFgKthNGqjDkEpKSoHGuwmBKq",
  "key2": "218irhSoiNAMzqPt8qymAghuFnjTeh4o3vXmaC8EYSMX242AL2FAoNva7Wta2NtPB7E3HtnACukCTf12byu1hbJu",
  "key3": "ori3ZPSrNUubidMHrVuSg1rFuhdDrCUJnJkg1CepoPA3V1sxMdvP6CmN4EA3H1AjmVudXeiN49qqNo4bKmfQHiW",
  "key4": "5SkTpFKVVa6Ch3fTkvmzJxVqr6As2GSB9zfYFau1i22xnoZHRuge9MGEfSTwkiFNez7sb3bryBtQNEC4EEHdFgEF",
  "key5": "27idBt35hAcLro5qA68W61CkurbYNuhXQPkKy2SWhMx6Mt3xMYpbgRQbaaSVp6FUpfxYTvhsB7UdYgCkbbq42fdz",
  "key6": "g35uYr2eQsm31iJLsR7oJMFHwFwkSyb4svBuTv65FtVjHxQggcT7SWiz8m1RVQPvkeBZK3vkNLXD5pXf4p32Ps5",
  "key7": "4qzAx7HpDw88AirJVDqjWDg6vUdE9wLL8dxcsbuYgDo1iNq8SijArsf62UaU5qs8bkcV61UAYAvQMoJMkXmcGvKT",
  "key8": "4hKU12HxoyjeH4eDtkrxdgq31s2wstYhgtp142xduZ9WetXNBTsUrV4JYxEcCCBYtoJ7w41PwkAMprUH8dcbXYyg",
  "key9": "65dPDx6DkJ3cJBhzYNiz77nvZtFwZ9wHitspnVrmL6FmDn5uocCLL44DJWqsReL4yLWufuSagNbjG3qW2NBzAvjk",
  "key10": "PJaXVc1JgJ9LFfYd3QmYkbr9vxiNFeQJ6ztkG8vKdiStKzECM7WSCQpoEjerfQ1yEbcjsAY4P2QQkFeDtfT9jSA",
  "key11": "2Pp8tVBAnaCVJP3YQCLny4ZvaUPe3DgmfPHrEb72NfUm2ujKfBBZ4cYhRF9EShyBVRVnwzULD3QhBJdwbphSC5c2",
  "key12": "58stune7Ej8AccuXzKkZAXzzHSJ2WL1oLzyLCvezKxh5apGKMmhoMGeR8RmoniU4q8tyuqACj3zBNLsYebYY9hzp",
  "key13": "2FbxA6WMPDCWQwrAznpoDU7wwXE3DdtbyDDT7DdhGakxzAgsBAmaFKvTabTkwE5aXx1Ss8yZgF1jiqqDaycsqs3x",
  "key14": "29eWZmDPaDcQnxjSNq33rZWoiDssVyroUEqJDhrDGiZikz2ikV2mMg9q7ZtPsjxJBVMvWcKimLzM3CF2B59CYuvN",
  "key15": "61uyQuHaUx41Qk7g76YsfgNGbLHD2oH8sMxJ2LzECEET8JSGF8DgnahV4MkPPcK65kxWhNrfzq2rXeJqZGhKHtVi",
  "key16": "5XWktKgTshCHVQRWx9MccwwcRwhBM8VtRC2rg6GavdWAzYEDR4qMmf6DZdWUaYZ8uQYYqrhAHBmx4wA5qVtwrKad",
  "key17": "2L2pqWfc1ZY3BifUKChQvXGZvWh4zt9fi5tVsSu3iobQv2ShQkbm9Ti1j36H6rMfBhJHrgdN3kxkbfDJuFPAinZB",
  "key18": "3Qwr3nkvqaBdTKSGHpwi8GXBpe4teV6ky3o8KADzc84QDn35mgEuND91Z1TwMQ8qCyybTjrTDFzzaPPvm1WTKZSP",
  "key19": "36vk1BtLR5fMs6HGpeR85Dob5hAarWWyaksUcT8bWoaHYRFUpwH4xMyj5WdF91yNT3tT3tkW7tU7tkHUQitPxVnB",
  "key20": "3srZJJsrCi39qyqazNQuwdTVvJbpmqiiWjXLTPSRktyCdUVk3ZYCZ15HH6HYRjS9ghkPamXfMkLSvqtJgcBVuN57",
  "key21": "5APwrM1f4yV8SwWAJc1ZE6BZHsVNiCGQxpvdfZ2uSLpjMm1V43EQaeo3HFwvQ8PQfbM39VDv2oLeDUCwUBFi3cRt",
  "key22": "5etyw46b1wmpepCyY4iD2VbVj6PVXDWKMYn1uDSdkcBaMetTefuTJ6UAt1dp8CkPTRfjbZRpoSdKmfFtYNUFcBeo",
  "key23": "4ZNWjdMTiHxikjxywJsjUNZoNKRAhmRQTQp7nYmU9pU2K3dRQxeTWnjtS91V6atGJSEmYeHbYMsJEG3X2Nry4bm5",
  "key24": "4unRCQzRJztXFfLCHtMU1waMvvHy23t9GRZMVY3gNUCcvCNfEdNtWoa8jV8aaWz5Zbc7k1ugvUmEt8MLn7mW4hyy",
  "key25": "3YHj4z6QAMKUGJB41ptV2rByjw435TpyTsdCuVPQrLGVLv3wrQRZ3zvwj9GvubHKSTAS57CyP2vSEMLe5y4R75AA",
  "key26": "5iVnCFtXgPqHv39kZZXgYh5Re7HrgXwUt5m4kDypHr2ByGTFTVANhC2MqDT82th2isuGiHZSn5NpH5AsaSv1HsGG",
  "key27": "4Aq8rXpVdaMAeRMwWh7r9ybCiReUGMTT2CSjUmQ6qyp73JeG5u9TcrU8Fj3Q1r5JGUqWDcDfdL5MWfnKMoro1zHk",
  "key28": "243kUybhN74j5ESPXvc8xvZEu5gNBQt4usTibL3Wi1H84uL4QbXByaoJELj1JfUuosy5Ai9YPZaHa8VaquSBpNG1",
  "key29": "65KPK65VpKsKgYDh56JTzyXuKjkbAxDCLfbAAGtWBGqaEHkEvNfwd7TLHVNv5V2pVSRAhPgsnbLgLQRyp8pk6dEt",
  "key30": "52t3XiQtCqk6WRxS8Wd9p8ptfG9uhj6nmCCy7mMAnqpk7XCAmQ1kKeZqXDarsZKJ8ot9TnfSEYc3cQQVQcBff9pm",
  "key31": "4PuMknHLT3NnMjLPRE2m21eDE3VS5Dx9MxtNRVnUXpbS4Djktw3xwy8oXPaeVGnrDZA3XC5EoYJ1XsewZDLY6W5y",
  "key32": "4pXjKhaCFB8pieAvjC3gZ67cUsQj3jJkzEpi5oTwqo2Z6oVrz32vxdtsTZ8KwxbeTKet7XDbp5sk79BHUU7aM3iU",
  "key33": "4uuvjqiBrfdyhiZecLY6x2FKyYQpJDNgDjaoyXxvR87Jq8X7sNCVxgSfiNex2Fzx6aGRXZHAzqQd3StnDXkWuzSG",
  "key34": "Wf5shbGbx346ng1JfEqrnoVVaNJ5R5taWQzhAtBvoC2DNeVDYPTL2whj9LxaBdjwwnqMx8ot4DF1PZ5r2SpAV5o",
  "key35": "5vG4a3EuB7b9VHxKnKhApMw9zjK2SJeLWT4diUUFsSzQwaHYmLDRZBYiuQ9NsnaauDdPukNiZm4YqR9J48KzjohK",
  "key36": "28fFJMsuCgEt349bnmEk3wzEjSLzPCj6U9WomnkbE3BFZJcNGhTxAynMNhEvFvcsbJbka3C7QYojZUm5yKxMx1z8",
  "key37": "4KNZHsSCfvdZDMoMmwzMwAz39ZFqyLDvPiRuStq8n7ue16vjvbh3keBPxdKrVC9TewGJtM8S547swH5ayuMhpQVn",
  "key38": "2xnn8oHtSBYd388zLD7j3ngGaP64yqbiRG4qPUJe5L9QphiUQgvCDu9XtUVj71FHCNHEUhD3Ca5Ei5qcstMQot6j",
  "key39": "vgxZNN3Wa3MsitMDQUt9RWVwnB8DJNvcNbkn6D3hf5BBGPt8NuLYtcQUAjxzK6E3nmQpspTXNnHwEdQXRCjUt6e",
  "key40": "xDyNKb9qNSu8voXy1jPFvg17VTYTaWRmqjeB8jiHxfF2NCSGoB9VYCADXErBGLgdAg9Ya1UiQG7Qe5WJnAtzxwB",
  "key41": "3uH7DoE7naWuqdVtvQ9BxZPfM89Jt1Qj5PB2L1ZyPreWz6wJVxfpHEtB98Ka9uPpT6PUWU62JVM4qyBGaEui2dH8"
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
