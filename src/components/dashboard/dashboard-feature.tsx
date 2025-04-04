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
    "2ApDbYiRE2j2CCBr6ynzjHynDboYqXVjSRRPn3jDNa428Xu3nA2XELw8xxoaJY2ioR9UfF3WxYa4n2yqdgPsfNYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJ81ibZveAXPdhCXs9yap3BJxL84tQmC6pzXp1dVZf6fFcRwBFqQaGcbecB1pUSbh18n1vuRbkcMFqaaZHDDXH1",
  "key1": "CuKBQrqCTxUJ8bUZ3V7ZL8JxdjPLUraH99fqn7bmAmdTXhSvFMxWk8VBTfbgHM5bYpvMFc8f1g7k2Zp5TxAUERw",
  "key2": "3jwjtS8KStWzdiV8ZBod5ca9HU6gSzzPcGHqemyEAerynnHX3GHrEtoBfKhw5MB43QX9z4R45va4e7X3VgzgfW9D",
  "key3": "42K1KK1z9dpngBW6TYjzGvDj5QYpgPGdfDJet8T26HSSXWxwohPsMw33c8TukGzV7XiwhsPAMRP9a2UWyigCGCXf",
  "key4": "42AmLDD675PANucLW4tMYRWh2sH1FUVYd5hLDsHYXEmNcXL8iroBYy13PT5E1cJGdHDwHW4tTkb9ZonB45ABGJMG",
  "key5": "3VzhYvP82ZKqVTLXRbSxm8LPW4p5bqszh34KcmN4aSasBB4mKctG1GMWmDAMsLrZ2rXpig86Dmg4kcZtifbSLYy8",
  "key6": "PMvLkTVVgeVAykNSaoYQAo9YGbnkivzwxZS2PrKBTVEBEXiNFACzYymV3TKN1CD5LkXLymnroHw1PMEBDBRdgEs",
  "key7": "629wCt279xdw98mCDjXiDCyqG68qqxqtA2fB367KLvFPKZyzSMrRi58PuCE5CsHyvP8Tt9DHoP1JbtcMvz6fNTpz",
  "key8": "2ZnEBPXCeUPwt4v2xBwqVQXxzgKYy5yhbL1HU1ZJxRviMWaC7w1xsxnc73kcrX59TmVJZbYNyg98rqwNr2WzuJ6L",
  "key9": "3fNtsD67ckHpCkFQTKeGmaCWFz36DJAdVxM1dsRQqAnzN4zvnGzsbpKs4tQa7tvnMbfrQ6QmwkoyDJ3xyB9Wh3E4",
  "key10": "5Y56xwmGRScK5cGS5quja6jW3HRXeC7uSgtACSjsSpdnNHHwaYVMqiDXD6jy9boijjZJyooRRKVC2w5on31RBAKh",
  "key11": "3Kzg9nHNrJkAywGeQ5wAWHdsAGndzyMhwqNncTCqbVfpZ2YNBsoJEnQYYykZqwE32GEWz1C2cDWiGsABju6XsptX",
  "key12": "61Hrb8jr9J4o9DnUf5kkLixT2MvTzE61sPxVdnYXirPJqaP27KXZPPuLtL4PE4WWBuS5nEFwq2jLARKCBYU1kRWB",
  "key13": "6tJs4hXBVUoh45bARspZQ9mrUBH8qDL32bQ3fg2hiyv4mZaD9XdTsqZcLp7A5Bw6uZ62or93axm2Lp7TMNdh2UF",
  "key14": "5z2iQ1n6o6TbXvwFaM1ncuqkFdppZSnee157FpT7eeoSSJwWWCPF9qbNTEVMPWJYig1c8ZSLeKdWYqVQGY8VwEzt",
  "key15": "3PQJ9XUeJGVrXM1NeKBPKes17GVrRdw6H1RNyznPBbB8dA8fix2WitawQobkmEVsAjeHwnnvT2bBwwbhMtnFbxBQ",
  "key16": "5QYR5jdFgX59YEBVicUsTxs1gLnb5CdE1SfrsLLE6JHZNMArvjvRvfzHMH5Bo2oUJWRdDUduqvDQGqaRCXT8jhfP",
  "key17": "2JZ7hQPFoGAT9XDv6keufR33FCxx4ozTNQzQntjZk3ufZa86P2haSugi9u3WtLe21GJUi2iNpV5gFMcQgF8ePnWb",
  "key18": "2GjcVwEk4cfEMjN6LuF17vwxQKJWhKbxaJwALHzNZgX2xg5U7fwMqdFJJtFDm5wxByuGNFLxP5eThYGxdDLJDba",
  "key19": "2PBYKKZCaRtdnfRwhhnS1EgDbYdex28xCRqWGMWw4kc3hGxBKxG4s9kZgWoyMmdu4zhKZxcFL7k5ZX6LMmcH173b",
  "key20": "4Xi7LjLPK2pm1a2wrdEtd8ZdEfWjqrgigZEXfBHWuauAMxAPXHku2v16oQEg3LFtMPFdoQJghBbhxBBkW2UafEWK",
  "key21": "54Guz5SU3ugboNKDwQw5s9YAgsUmk5X8WSaxtzHRDLqacsskc7ee4PoDXK5EkAuMT57njQTBxTy5CEf8VfFphJeq",
  "key22": "3uFKpZLFam4Lq5royz59JyQbgaxR87nDAKqr55tTUa3dFB4n1xxxpPBm8ogbHte5hm1j1xF2KX7TyAbYGMnb98Mh",
  "key23": "wZANBfgV5Sa9bPydtZ9qcPn1ozDka4YuaMZxTVnTNvr6XEezu6zcNqNCvWg6mH2arAo8eZsJ826BtDd8FTHRWK6",
  "key24": "RBNh12zTz8sYh4iSbrn7SJekczczNuBPu8H1XwTcnGPSNYJPgSXrZq4sGzvzNQT3g4uCBMGPQoNxaPyPv8NksLo",
  "key25": "4RUs3MjRvtmXTXgt2xHhgbDFYAsGGVZ5PxGV7ohAydko7uVndcxQvw9pVFotS3Y4AKaUWq9XUr1VuKJggyt7svpn"
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
