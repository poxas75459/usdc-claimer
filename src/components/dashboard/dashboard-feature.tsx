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
    "5Sf8yzXbRbQVkZ7UL2ocr4gR51zyGAHkhVCrJzjJq2ynv6SDhshb1c5BWzwaEk7KbBXipV37aR7jMEEcQ2PYEKro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ig5EpmgttisvJzgRpe9bTnkHtDZgtPz2BGahcAnRqM87QDL5cpK73Knoywaj8uJqzCGPxa4dLs7eAuY6CjxjRtM",
  "key1": "4Gzn73ajVWxEQazguBaU4Ezt3Rg6Qx9HVqLNUuH7jBWWQHCzZwA8pZC14T8ibwZcKodt9suuKY3ZNax5nvpxNc9x",
  "key2": "RupkqFJuxDZHhd4Db1fmNPnyFqsFk24nN26gNRfZNBAcR4KP1WSeWsfB1YuKJB54oLK2Pi4TUKzWoetmYmemWjV",
  "key3": "5jhyx7XRNKe3juYsn9NKZcBEXFmdNGqaq4XDup9YuCmpsyfzzGXHFgsopQBWuffd6HyJCyWKY2n15CWZqMkKsKdp",
  "key4": "4SaeuuXKLW9NHEnDmwtgSeXn9kxwVz8Wy8HSbgitejd7Z1hXHaCj1i5sihdwYQqUSLKieqz2mUqj6yfpBn1EQ4no",
  "key5": "4cV4DCEUiMWpVA4cj1oZ3Vvt2NW8xMnctWy99jbqTVA4onbZZWHyWAGTo2UggyTXyf9sHZqbfZkEFuf3wzzWZfuL",
  "key6": "5bLiyC2R1N5PJSM4wRMCGAdSUtgapb1Rr8tTxQ48gM987nD5ktXHxe6NSPFyyPdv1RxXMVrcfurCgL717JmQSypv",
  "key7": "2RYqNqgPnzD1YhoXcYFGxLpiQew2Pgo1TZaDSvn5ZwVnqJgi5h94DuUAKEFFFp1N78oKVBh3M84vhFFMgpxhmkXx",
  "key8": "YgNcbKPkon1uUUgzxygD3hJmuwznhRsxTtZC2wWWeuBfWaT47LAjieCpxBdhtJNt14Q3v3UPEDuoieyh4fSZ1SY",
  "key9": "2EzU1f61A78sXtFDY7ZmEwKsrtDyuV3AGcigA2nuSRi5sh93HkiubpEKPENQbiTwxvuhZDY9eYPsTiEjARG3jDN",
  "key10": "35feLJcxDG2rNNXvJQuSvSQEWyREy8ZuCwBbncCB45FP4RiPcwWvgV4K5AtWa9mPpTamJSP9sKV739BmFwpAH2wL",
  "key11": "4gZ3xDuv1aVQCwTavjCW9sfbFpH6kv7CJPdpdAKZSdpLweFTwmyj8y9bWTz2QqiXFxfcw6uopLJCvpBPcBg3wMA3",
  "key12": "KJ4srfnwA1nKEPBtJg85dvCj6X34z2DViEvux1YSkuzsNCTgy3BbE1Lup8XY8uvgqNobxCLDD5HtiE4DrGYjQu5",
  "key13": "5DjFCymYCZAvf4hV4EpAWtW7GtwnYXW91LDBT8NMEUdWP9dLxoMWG6dbcBvwpebBVhYR8tsg6e3DA9LYGDfCqFKw",
  "key14": "41t9n1qYSwbZK7pc1HrPR2zMaMQx9fjqbsb2QCJbNjKEGuToNxNi24pNofq9oZjKsv5J6vEYMTSibZRKYzdcrJz3",
  "key15": "2gMAmF4p1tYkaH5Hqqkaee38Qqo7U5J7ghEfVniKfygicevHYcyTXSgZgPUHZHeGVovxVQEciA3GJJqxEdMdhScL",
  "key16": "4XB5CWiAThox7huRmLeHbLyagkwyCBDbcZzt2JunNMQXxgEFgLGVgQQyuGTEntyCjVdfShrrcHcCeNXZPiPM8WUi",
  "key17": "2dTveoCBBzDC16PhzvLdhSuP5Z6Ds3Wa67a3XyjnnjHsesXvfiEKxvqaZ9fXPjFxwvzfWra1VSX2cmkf9ZjCg6T8",
  "key18": "kdWu61mR1tkDQFWsn6vx5vrD1w8KGHvWwp7VDJqFK2dk4W9jREExANcmc7sEFv4iwbG8GhsQgjdLgcinm5PStK8",
  "key19": "miQizp67d8cxkmTxUEseHunhTScG8hiiztG6jfSpXXN1B332UAZURRHdmZGvbXNcpv5LVf4XpSSZ8J8E7xDVBjj",
  "key20": "BRZRXQnLTECqV1BbPo8TnW55Yt4dzWCvhvWUYqFq3oukp5aTZdfHwAsg2khjH7zhtpYrmvWdMCiLBpnmLeYVhzv",
  "key21": "J7pfbsctPjjdgKATMJLao4bPU1mQrXovapoX5ExpL2FFKv8ASx15dxNUs83phCju9cgPi2G5mDfeNwKe4oPaW7u",
  "key22": "5UCtB3bEavxGeHAd3WNNbAQGkf9vFkzBpSCUQEwauWTVYQZ16YcWr1VTw9z4rmyZXiXToky8Bs2tGrwthDcMqZ8A",
  "key23": "XXZ5AugEJWr1AR2uuVkmzW4hVzsY4tV95LTyMacQDDXfGiYHatPocxKSYJaYQWJfKw4dfiqi987Qp5iHyDDUWVF",
  "key24": "t7MY27iqYrHWyT4EqxwHqzgaubCyc27aGcP9Nd2CeVZpuyPs2jZrJE2qtfFj2fbzX9kmGs7NszopkRx8nfCasST",
  "key25": "3ijMiFVtGXV2ArdUopaYyogb7QJnRi13bEHzJ9vTzfkraHFubPJWo28Ux8CPHeRsB7wzdN2gGLfuLHmPVHhZqbFc",
  "key26": "2ACRywvXmVbbf2ktg3FWBudUZWWrY1v6SrLHuzwQvbsWHuzZ5nirYFraFSp2BG6BZWBQBn69qcsRNqh9YoAXZeNX",
  "key27": "3rJgi6cddjaAAukuFTYnT6ckbWHMWDte6jN16AHwRkyCrpfMzoJT9p8cKivvEoGvoJLcWFKQ36JveD2FxckjE5Zd",
  "key28": "3H3jo2DmtERYgy8EpbjaF3A8Gyj7R4s7a8agXZ5eQsv45SASjmgB7YZVh54nf9qAPBfSg4rfWyGwoeS2p1FKCJZL",
  "key29": "xfaSMHstUPeUS3G9gZ37dkZN1d8w7FScxe2fcmBbiue9Da6j2zdKcPnZD2gJYp7mW6C23DdryR116wbSe2wgZCm",
  "key30": "3GEDESABBvxRwHw9HbbCf8iF3BGGs4pP6z2VRwEoNLan9cxJfx9FZ18hwFPWV6XvqWoZ1nDr36zfKQrav9ErVS4u",
  "key31": "T8abnMaV3FG7svyzSuhp7oZ774WjcUAxgVVKAXgKT7AGPUbpPyZzKdVM7fUSqdi1yERzrFEn9bpTAZrnxVzMh19",
  "key32": "3b892rTvPRHKYMLBtrfx5tA9Ckmk4nzzDT4CGDo562g4yiaMVKAN3Y9ZyVnNakFaigf7ZigpbFLTGBEy8FUeF545",
  "key33": "5QDdCz3e4ibGxfo1KqGWGPLnJbx8csFL1nqd7QY3fsE5EwRQEJ2sTCcgpvdJpB2LgdNTsMkED9C4CxJqyyvBkmN"
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
