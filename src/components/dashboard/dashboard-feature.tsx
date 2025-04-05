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
    "4tzcCoppyCpsUimWipkwpCjT7JPNSDLSvYhxtqNaUYNnytjavh6ybk3oxcdNUxepDXF2zrrUvgHcoY8Za8UxA37f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhgVYReNDC3TJ4t4m8X4eswmpb45aDr2svAcPTKpPLAexE6Dev4auK6i4de1ixA1jCztMXh3UEGwBs3FV9e59aM",
  "key1": "35p9KJLUfvZYSF5CrVGSwUyhriXUYbzhzTzBuQxU7xa8PTm4uhHtNvpZhVqFMCYbPD9SS6gPQTdg9GmrBVFCiatb",
  "key2": "4Xt8GsdqhrGmtbmbcDvzVEArFExZJRvzDd1mFfJ9qgUurxfrV2Ww6XAEaFimrAz3aDa8hJ9vsDwjv9w8nMTz3mqB",
  "key3": "5e7bh2Fm4Wrg7hEESJpBsQ1kW5qrkhsMwehEc1kpQNGpmJ3Lc9RjvuRXZJyAobHuZNmBE3VRJfhey3umYKVp7oeG",
  "key4": "3chNHHuceos9q5hXt1CJFF9tuYG6zF3fiXJRje9dPwgKwnyRg4jh3W9Z1sMwBujgvyAp8rgXfF8MqjqK8K5DespD",
  "key5": "3syWqDd5pG2PNeNmQDW8ihWkzHF4ux9it3HNrTVyVGNCMHjYFXqXSEBrPBjg9QkUotQuxmqNpeqeNDfnNr86zB8w",
  "key6": "66HUeaXE92kF2MEMsc4wqmVDScmXkskLRtMeojWtJRpU2GSLYZzfkG5tybX7xsEUaL5TwEiapWY6bxvwFKdZbo9d",
  "key7": "2YuQkWD5EzaewuUsEMEVBXFNisUVCseSyDM1zoTW3GRe9GQNPteu1fmFyiGTdUZAiMdSnQxq6eHAG7HQxoHGXn87",
  "key8": "LgXVxy22XG5vWhrzCeu2iHuy99TBTbg6hdqVs3Dyb9uAys4BTvJAXeEbmWL2cCxWKBRYvKbSByMmJoPnA2HpvdG",
  "key9": "5SFR9QBWEvVsToY6o4iTx3Pqqgum2vdtbKAof6T8htAWk6xJg4uZKjgU73aqvHpnaZk17ALg6bkTTT1A2WVKiZtm",
  "key10": "4E3y9j9f99QaEPCHLiB8QpruosrpgU181LV3A57mAbDEWFsKQ6PwtF6bBJiEAVWJLVVKCcKhDBHUfgF3k6qtjQkg",
  "key11": "3MsUn4TDpiVAQGU3D6gj1op7u28j9zNANuC46No7zACprccAErTdpCe3Pcd3rCGmXGVTGmeHDNUgmMfzmfrbj8qb",
  "key12": "55xQTGd9D4ZXjpWpNmP8jKg6mf3T29MQuL7h5kNV2TzemGAMD7FGXXTUHTBzvdnxvHpvijx7vc3e1chx6BvuuS4G",
  "key13": "2GwKnLe5cASxqeUNiP8vaFEur7rtXgiNtwWSbCwK2UXag971NeLPPbqBZYnqvvew6aTNZvwJQyEt9Ek59Hw161y1",
  "key14": "5QMNcTibRbGdcHCabGy1HnZ6UTf1CfWfTKCYqLwEpzysQTzTx17Q7JEkuGQR7iFJGuDWNYT2rEd2ZfkyNHCrHCvE",
  "key15": "b3FhZpSVAqTRPAU5gvKiwvHFLsjbf8HBwKUF9N3ePWLWZQqK3xqx2zwss8MPkrTyyfbg92kugu14aTgVg6pGrYA",
  "key16": "c7o3Urv3kTP9sUCYfuopXaEef7CDJJAx8VxuBCoEFTAR7NovvZyQYfvu4meErZb3w7e4TiXMGjy4e2RumbLEVKd",
  "key17": "57TVo6bs7Bpj39R4kH5VvagmFnGkFeFUaPWGyqsCpWn59bkWSVyUJrQATMBZLeAjN4NKwsvhastSW3W6EoJ3rxN",
  "key18": "2Ths3GC7CTEME86deVhkpTQaadkmSAqUJ6Kyx4KPVVx6WPcBSbfEjjGEbPQa8EvQchqnhEcccvYrGgA5wgvp6TJe",
  "key19": "2EZXcPFJomtotfBJx99D1UQXX77FpvNpeA9PQnT1eSn17Ky3fDKSmDhZiraETsHUjBrViJ3zrRcJFDyu6jiy4XHo",
  "key20": "4B4tQ6d1uEiJEFUxBrLfkc2KTo8ZU865nSvU7CddSRPHjv6Gwi9NUaBJswSdY6qhfGPKy8UHHvvUsu1Hu3cq3rLL",
  "key21": "PMvQg1dNKyfuQeQEVqnUDpYXVBgam5GymbxBi5YP7gbtAD32AQq943BNCkcZLMeKuLfuRP8aM8Ys92fQXTJvaCq",
  "key22": "uPShcTvB72bhY7c47A2GsZuVmc1SzyhNwMV14CkFJJkYYrpX7rfUspKfgTEpmQZjcT6n5VntJf7NZ69cJB4hgKe",
  "key23": "kbr8pyg72BMuawyE1wZVcFi9isJvXSqDZi5jyKqnVMB5T9ifqnb4VYxEWkX3bK2SNCTNEq6oKxYpcQVDgh79nKj",
  "key24": "2mE4b3QAEHZHGz52kXR2hswqbES4sL5p9Av2YidVSSqTkreFKMDBUjNBfMe6R6VGzdtVVApT5ZV4VYUQLpo235Rh",
  "key25": "3MQC6irWqcHVAKfy1tarL1LQrVqj1VFBUzXXN2uW4Pk83oB681K4NPFo3uZZeEzCUPjtD2HqkcjHXadWRuvGKsCC",
  "key26": "3D3qcBPnNWZRhwWsNjehbEbCHQcLNvz3hQRdYbw7iTpSJbKnC3LP6h9MbbtD5YQmtZrrrybZFSFydf8Eo4pNbBGC",
  "key27": "2i3fU3JKtt7KGHca2P2FGG87XB23hmmAvyvaT5XiNu8bUGAZ1acWGmr6q7aysqScvcuwAcfyUBHPaK9wU6MBfPzE",
  "key28": "vyNTX2J6uqzbV52ZQ71BGT6TjFm6XnmiuNSUc5hkET31oYidwR76J6xithNbhhorAb1jsJgPLHsp7JMc28xs7Cq",
  "key29": "49fU9EQ6XoZbbEbatT1LcB6YhX3Xiur8GpXToyrPKkAWukr8pLcWZTPpnRDAjeB3famUUYrtE4sKkGXavEK4yShb",
  "key30": "3WFEfcSGooFEm3EpLvTe5k1NJY14xYqmQheEKpWkoi1QLN68TDwwy46QKPHSskNPdLii1tC5zjgTiFcqxh5eW2e6",
  "key31": "N8MjZ1Lmm34gdMFKiahk9Bu96Q7rAU338ci2RwTsdRN9mfdoXrshbH7MUmcaTMDqKamnSsZhD7FsPhdttc84vtt",
  "key32": "3kmaKS2jdX1brDYYjHYhuhtjq2rpdAKhi8aSewULU3Ec4Yb9dDLu3cXiyqm8cpsLfyQVHu5CLG57frbakCwmdgXD",
  "key33": "2h3U7wnLPfm5E2eqV8G6P1GXgfL3YqVSc4T1D3AxMEeaeVNwa78dCQJFroB6ajnYRvtymg1fgEAfGJWPqgVXSB7p",
  "key34": "Y9WygdU6wBWJYkzoSA1CUb1d6uVSuYQZCaeTKFN2XoZ3jiwKXke7GHaSJhhHh6ECTAvQjdzYvyGht7kPUez4uYJ",
  "key35": "2kgTY6xPxEk7LkMURwGW2nkk82qemU8hMkyNiCaUkv3ni57HXhaAvGn5agvrw5t9yiipnKcPpoK2HmBDP6WCyZW8",
  "key36": "5VzttAXXGHyehcXrAEDT4MPQGwmhbkL5b3Z247gFoefLeJS61nmF5vH3kFHQjgBEo6NK2KsjHSwTC4VDiFArpTDr",
  "key37": "5z4FhXgSpcnhopCYPCe6N2Y3LVgZGC6AvqLJ61khP1GTVkL4RtuGUMTWzbiZJSCTem1uy3TujZZASzt6Axxb2E7P",
  "key38": "4i6wHHTBAxWiQ6Ai69LXCN9rhwBMhttc7XxaeGd3APBvWSQtyCj3xLmQTtoksX8JJugVQ71xqFyqzG4aDh2N77BC",
  "key39": "2XZMqcZ22A8r8VcnA5izLpPNiQXbW37puFZFJY14MTCCzE21K7vJ1VUcKzJdU2TqhxdAkz8LdZ7NCtvZy2rD7kWL",
  "key40": "4y8UZuHaxCUhNVDZLDttErivYEKrHnioAVGsyKJ3ogfJJvFUqFB6PCEcyKutnkp9XCCJjwGypLzVcP5UvgACd4Ry",
  "key41": "33h4q6XWNNnWK67JgfjXw8B6m9715QnLNJwm6GNn4xezHUWVjP3NqoGLKDoz8jNo2pe9MBxUrPeD1rkXqWai3WwX",
  "key42": "2DwGa7mK2vMpbFKDLs3XgRg5SHrCHaqdUY8FzYXFL33nxjXrLBH9DJ4V8r3GBjs4BkdnJA6y6BT1qFrHYbLjeK2k",
  "key43": "2JBUZUA66ttBKfaNvz3TBKZ1GJDAVzvymbkC2fLYFmDx7vnLyNPM2KtSJBasNN8dsR7byBLKnJkPdTRBqmYqGcpD",
  "key44": "53NivouEGLxUSytXVr3MBJuZgNnLXLJc5V87NvtpLS1E2SFuqPcJ6VLStMGS9guMm8ai1DwLp6saxUk2Nk5EMGFx",
  "key45": "4cnfxpTfCgzn8HZcBtxqCSZFaqvi64VW9sNRo2eVrfPNcqrR9GytDFKPFjhrRqcwbjxbTUAoJJY76so9XmS2NMer",
  "key46": "2ShQQ6uJyStYtwtE9Qeey4vPzis3BD5QRsfeVeobPRau9wU8BrtLQbA9z6hTpFJgeFSAfi9ivNBDxreuzCkz7aQ"
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
