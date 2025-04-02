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
    "3Bjp1BF2Up73xKcpHQQLrfVwkxFNzRWhbtC5GdqGwyKeSPQosqQHdTpdFzMVjsGwwCwLCkq6Gem6g9ZntmNVuqwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heNVYmgByEVMsHW9S44mqxd1sdVsf9ye5KKq8M1oc73NiBsNC4jdnBS6wNsg7FmSmLcEAmgeoGcckttLuXykyBx",
  "key1": "5SkgiqDH7LTCT9MspmniXp9HQh3trBYFmVE5ux4HeqWNvu2upUVpfLPkq25RpQ46z8VeqKii75MTgTRnYMeX6hPB",
  "key2": "4nLwikmnpFgzk3qHajy4NSahLEzLFsNFPUgcCDHBHw796y3UaGUC15fDLRKLouFpFZapnzXWPpCSp5UhHUPMnH9h",
  "key3": "2SwKfbCbwLtQ7Zt42ZK1zDCnnBxhHLtcUShiz5KTZF4kiZ8ppjv24NhY4kxJGDew4oNUJkVWPJmSrRo2cqDM5iTZ",
  "key4": "2ndtHJZsAXfXbAMgVoKjVYHotS3LfexYbuUjxSA5QdgQvSn1mBddyMfN4uWkrkbeLGZsBndoEP6ewQD8K2CMfAFp",
  "key5": "3DGXb52VJGmqRTriW4vE8ysehcA78fiMFFyDoP6M54SwYsDseDJ9ka6JN6UMsJAKrmRNKt9qqiCqaeyz9BE5y1Kv",
  "key6": "59hZEyautnigGH5K8u2Pupp37hWZKrbxqhMAJ4ha34CiEZ1LsjdXsYScHLw3GAXiF6Bx8X4E8pV1pjczcnjFTBhi",
  "key7": "4dFY32jPoi1yvwY41mNR5XyT8a9jx34bVLpDjeEWyUFLaVuRnMKByygzTCCsfAUWGMPwK4XP9UD1nePaLBEF21XL",
  "key8": "45Gqs5kvFcK3mrnqhnx17PUsz5HRAc8feikL6UHeK8PJoiy35qgMRSLffNHfWhvDpQg8CGFbfWZxwknUnb5ZB3Py",
  "key9": "2Du5em1zG99rnUGSR8WyjdKzWYzfT2MRoLjYKYzVgXMJ8vVeQ8gR9oDVsCuX3J4FBJvwwERYyH8mQ7N1UjRB1w3N",
  "key10": "4ySatEBvB9neui2nJWXZ1m6KLirDvWxHYW2pFSrrkwyzDvwztm62hzG1Uvzop3K6jEm5kUX9yCTh95oysJ3iVsC7",
  "key11": "3jEC7gKoidAN4waxFdyAEWrikneVwxM3S4R9jvB2rtXEhv39DPDAHXyCaCT8kArSH5Ud62xyztXxTQkHk1NeLKbv",
  "key12": "5oZx8qmaWQ3UF9qox1ke4KAAZeuRiVa2VFYYmRbEGSBU3ho9Bgkt5sLTi7DLj3crvoXpAX9aEgWCjNALGS6e9jTt",
  "key13": "3uhBNaMjd5gTbArGVfgN6KVjnFth3QrG9y4Vec6s3U9dX8g9bpzBud59H4VXR7WUcmsnzuWt7THfzMiy9RNYzetu",
  "key14": "DQx8PrcngeV4Waapx2ttxh6RmFpNFWCjpLdLHhW7jf7ARBcaYMecLoRsMNYL149npp5oDroiTFkr54U8WDAWQNa",
  "key15": "3CjtwpJt1stPgEedkdMB5JnEWQMuyNgC3R54BQTB5zVKYhc7oENGX1VCC6U2rdA4SR4ZWeR4TjA749bt1wtdaB98",
  "key16": "61fJ9j4ReuY7fJDZjrfcum7vhBmzEyVnULkA7vqSs2vBWrRUvEd7bRNYDKPNcwFLRq49393FC3CFgNjWqrsunAk6",
  "key17": "ceaLqMyq3kxKqHgSgwXsmq89gNMZy38cXDgoK9jTAYyMpqiDJJcUswcGb4aVTVgpec9mzsufSn7NkvLarb8Pb61",
  "key18": "4eNwvhRisrYiiPoEqQoYP8YQ48LFCBhXGBUN2Eq9zuw4VKoBAzFrBJmmL6v1oepDhebNvx1PSEEN1sQN2Dd5i5KV",
  "key19": "4uZeMKNQUC3bKwwD5ka2rZ6aWpPGwD1jhqbSeJVGbamLBCDABbqXqbfpXjatDWQixqNsTsLoWmAoc51ZAPiSR5n2",
  "key20": "4AxiZrZSrLJujVDLWfEioJa2iyZMaFFd8PKNwCnLW4FnwiZJkdpZhh7h8EixCmX2tciuMh4WwDobCQfTrSJkkHUb",
  "key21": "UCcpg7EU4FnZZfFfbXNtA65RSrYbzxaBne3UAqY7a69G2k7cJQTB2budn9NgPykRig85ajVRYurV3dTZ9aMngap",
  "key22": "4JpKghMKugb8VurDLqAH2sEEjHonWUTj6r86iRxwANd7GmifGftSnC2aEaf69Y5PKRknfJfPNjRnW7GRumzqoRJA",
  "key23": "4NCCsDQZBUnAtRAo5EmdvE5gMbHpdLoewugqgxneeoMARwMxV6af1vHyNX36zVQ7iLiSu6kAZ6gaopWmuC58RVig",
  "key24": "4YTmoXNoBaAqzaSWRDJj8xXejhtcfPDh8MshjW87yCZ2VLsDmSeuxyGtKsJK9hAvTt3CpEvgALceC2SPcrzAymPN"
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
