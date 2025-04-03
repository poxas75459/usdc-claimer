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
    "4aMmScBdxkT3w5kUAMRxncEWyM1u9ZH8DSn4J3Y42BwYscuwpEU7mjzhAxyywnja93wsX3cPCgcHJBL1WmEbMXmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jUbYWUN96SeoY4nMT1kTD83NBmGWsXzR3oS1JmmUchCUf5B3DghgWGnawRL61VTue7ha72YGAM62DqsJ8ZdNbZ",
  "key1": "3NwLLzcMjtHiaKkDxTAhbVcWAodkFezGHh8pd43h7T1DxwvmMbXYBVYDLTDAigWeWWVJCzKwEKb5ZATBMsoGZTM9",
  "key2": "MsL1HBHzucZ9bFisLYhk3SCdiV3Z8ECDXnPMZ739d4ioZ94UqKWihYjs79okGLfD8FozhV9o61PUvZZ9Vw6BJek",
  "key3": "3E1iJU9turpGphffr763anDNczVg3fktRfwHH7zbydHU5b6EYbL4MNibAbjKPoDSpfxDprezp8uKEKzYWxdyML4H",
  "key4": "3Ks1ZX81dyuzzLNdMG8UwJ7nrLUBiAHdauvsBup9gwL9vDrSfFRHD2zLiCUqELEeiV5X9EJQdva2b2w9PGq4duxY",
  "key5": "Zo3gEhKy2empkFYzohYRfVxtaZmKD1ii2MUTcERg5NoPzEkrkS67soA1FMvmpGhPsxdbYYLHVVKwZyEG1S8tJjp",
  "key6": "CvkjbnFkrSR1gPtSbKBRsxDusvFXHZDzn8tAZXN4v4vLAL28z92Cp3u8iVYSV67asjx2bT2t2YN4z9yBx3v6BR1",
  "key7": "3pJyopxJqDaz9NrfwxA4fGrMurrMqtjw5s7jU7ipXfFCkeLtskb2Frm3Sm9ys7oj9ac6dZdzSmxcw7WUCsJYcPWR",
  "key8": "9MGDLqrkjVu8YXz21kfCCF6JY9BD3ujDBvsEazkb989sKwYVrrdAPoynNHbctRcGRqkZd1pJZ27mXQP4pHcX96e",
  "key9": "ZXQBooFstYM4NbKpPAyxT8ywVQodKiyC3e6agh28wWHhYnKZdFeuyjUtFH5kfT8UsW7w8nAYC7QrgERH6VYTW63",
  "key10": "4UGoCb9qnvTpxnJFjwbgLi1EHkm6h8TY56QhCUkUCfEMz9qNzKZNaJ9hZxNCokcispLbjJwZ19v71YP2QFB66Niu",
  "key11": "5obtjhLCFqRkf5hPGc5wy4HjvBnXj5Ay5S4D4rYnXVukHzBBJS5oFTownEXYttL8s3D5kx8bkxtkW6KjLWSwq5R8",
  "key12": "3pZJJviWogArBCFbybzcwtcCy4K67x2G2DhX1pAJdPkuJfx4pc29cao1AEHp2UHJmFLJUzMFHmzekzeqmTTVC9gp",
  "key13": "5M66qMhuiRggkMnWV4NepDCg8mCbvk1tf4Co3AZaoQ2M3co13ZNaeV1WBQEZdkdVseBNX5LcYny4g5fRZHGq98ji",
  "key14": "5cx6pDHtksb3tgRtafQQTbFv6AwCCguThbkVexRftWDVnvBiCp8m9AzyCwWTmusWUy4nRR8ipLrMzJUa9LC41NZu",
  "key15": "3q2g988aK2jwN1mVsrt3UNq7T9tnbh9QQoaCjfiRfdG9K6LnuwDByoSyz5KbfzXZsh4mRSf6azDomTTnbtujZqub",
  "key16": "2g5QrbW3Q3XVMR28yvfJQ63YSQhkLZTwmNTkYn6qNZw43FgQ29YET1KXrBU3UoTDSUHfxYA87hWbga5Gj5YZHER3",
  "key17": "599a2b4mZuL1hmKbb7xJWtja6fazkshAgEvQ8b7WYoJxvAwvz6v83J7Kv4wGEZQbDJhGUYFtVWt8aYWnh9RYTJ19",
  "key18": "29AYswjvZdLgMqJDE9GKav9HLnQpbZUTrBs87qG2GE4yzyLJdv89gzkBcu4smcrrjFsKgytLMHydEjSvvXTokqkq",
  "key19": "2hajWmEKaHKgxtqqV9UPBoKhiYFb36vxZC1ydQEFKHVAFHB1yer8iFVhqda3vUNjX6x2C3kazoDBqLhunersspu",
  "key20": "2m4rsZkFB2mdhUF7rdqHwLy4yvUV5KtetJ4G3D1BoN9c6GMo1iddcnJJhw9Qf7ncG9c6fSFueZxd47YMpSFuxiHk",
  "key21": "4VmkgpRwi9xrjj32Wow3gKAxxPNMp22H8j1gVMr6PnF468v9DEt58b5n3YAxhesXg4rRdhvoiS7CmiLw5JLodjDb",
  "key22": "2ea6r5ysG9ZfxMwfFenLkVg119GnuftHJdEK3cPLFG19uTefp9uW1F8Rq7XmNqCkm1hnxxVBwYvre7dVbSGRuyfb",
  "key23": "wcZbNj5dKG6stvnm1rKvrA9q5uD3i38HYXSnUNmr6mRLegdiWptTjBc1Jz1EhnXHQ5SCywNYF5L3PhzYPan2n7e",
  "key24": "58h8ekSfVx5UEL1hKc3Z25DAn2do6MBMzXm4aGJ2u3yUtJCugnDpmUMq3DJ21rZt2Tam3S9wz4Qm99rGt89bQCJJ",
  "key25": "2T7TLGnvXhfkLR9k5HE91YuBsnADY3fqCTgv4nxkvHT2mNaLDmeBLQLDZFahhny8dHKEYKgbRhB9tfNPkE8ccN8f"
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
