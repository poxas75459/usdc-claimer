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
    "3qHSYgwVZ6Qpj1E9AkgQb36Jnvf3cz1Z6yYphuJD1Vd6cG4iw6n1nhkk5W1eee5xK2aKGFUM1ezG9Tb17QmeXU6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXcHgoxrxNHfz7hLrjHg14KLodv6jXGVMauKLQUecUzBgKN9bbYnUx8Hc7H8NxLi1VdTgraXKzpuFAcXExaw39m",
  "key1": "5zeztkvWfDsBbFmJ674aLeDD15JNXfPjEkVvCmrPN79p1TphJDZimvxvcTNVYkhYQSMypzDAgEBZTrX3iNdMq32d",
  "key2": "2x9B9EFrVoDwp857TijedoyBeCJyCmHBJ9dvLKcVXKYJTKbtutnS2vhKGzH2ALduQp5rWEdscvYWzTBB3uEUSrAB",
  "key3": "3cQhtzQEzZGZM11s86d7yFusQTYfPeK7q1eE1857iLPqWsudhADm9eTZaQb8gxrbFwoEMzNcMWVxuexWis3rWGuw",
  "key4": "3j8C4MNq4haTg7uPNg5JbJzg2NW5VfbnQmgX7vVrmpBcCDLsYvrtfPfABLAMFwTn8KsyL14V4VWDbaHZK5fBYuWP",
  "key5": "S4Hr5UofHyGC59PUQpnRHmiGh5NLSwgY9eAcTfwiVpwTp9Ko59hXNVxRjF5hwqLGRdZ4k9M2nR2AtSTsoyjYWJK",
  "key6": "2PhTVK8WbicU4NDHPzpih12YNgarfWC1ezxQNcKYkMWxCr63k1Fjo2gXrEc8LrEWQaiXg1uV4hzmEf11oaaYq6T9",
  "key7": "3uXKuxW9RtCkt4v5GW18mk6EQsFjiURVeEyHV74bSKGUzrWoqqHL2dWWPJJeWys79RcqapNNekHgPQuCJ6kaNvap",
  "key8": "4WUcDEpHhyQh38GR3wiF6ShiAwgLustmp83r2T2MzyUjx7oPT3TkAuVCtLBcQ1P1ZkbRTJho8JPxv4H8FyefUy4v",
  "key9": "CqxBLkkz7zoAHiEegRRQ9LRoCq8Q9NEmTMakqpxNXFuAU2uoHtwHyQsG69991oxHziMCZnnqkXFAqyiiU2mxLDi",
  "key10": "4hrduqXudSh8Sk8xzJdn4QbHxwMKRLx7yD4SF3G2yC8r92SKKsWKpA2JQVXvisnikygysU56ryd2inZj9Y2qVgyp",
  "key11": "58a8mnPqNfg97QKmyw8vzzQ4kbYcFox6PvRVdBNP53bwyFWXyd6Sdr84nwWh4CwoVtUv6kyiGBeNwYszUeoJA9TD",
  "key12": "HEE3MiojnzqRs51JmF3hhuvvzcHrnANNhdFMuJjnE5Mt8SHgEVVBpDcQEHdtM6DoW5hzA1A8oVqpuG1h3dMxrgJ",
  "key13": "Cff5EdaGn4Qb5yo9CqkPECBkJ3BT6J2BcDxzrdauoMS6QbLWLDdb9uo5NvwDWs12rYCZRyFrJuDYSmLn6FPMcXU",
  "key14": "JhT2GJSGN7Rui5d4gJxLV91NnLjCAXjdjmyBiWu2qDg16sCcRiX3EbjmwexSPSD7Bj3U2iHXc1S2eezCQmfpAtV",
  "key15": "2smG6go3MXhAMCR3vFe4L1qCzQNt97W2JnkSCHPeGnJZnbG5znZXs1ci6bgj5xFjiZdzddn83ZTzVeWNnj5Kdt6x",
  "key16": "2udtdyM8LaBxX33ENVoD9p9Zn3JciwwFtzLkjv2EZTEhxS8Mf1UegHjfhfmxdjhtAifRzGX7z7XFDUv48M18627F",
  "key17": "3dC2oZVRxadKasmh3dt9dj83qgRKJfyA8rcqkuXYCNiWeuqRjF7LiM3L7JXyWDacDX76VuqYtV4SxZH3bpoVVW78",
  "key18": "4P61FFeRALQ6uScEzKAiDLUGiCymcfXEBBeH7f9rfWuAPe8yGXVco1xVW57z2BBqi9WyTXaWzsHHGFusqpqhnb6b",
  "key19": "37WpBAG9bwysQXXLowzKmvTPXiYyGNf1HJJfx7oKZD8KGY96dGAgVxhEWm8FLDzJ1b17fFYFteXQJ4faEstdGKTZ",
  "key20": "FvQw5neSXqZFwM2a4DagAGsnu8HBHWrZf7tC1MMjEtBnHpyHk8pFv1N5SyrcgnMkn8yME9QEkH485zuesNqRa4h",
  "key21": "29g7BzSDWD2u7hQK7HY64ihXEkTpNKy55xkwXH7WrXBdH7GWnVQnpGiMriJxRpP3kKcQeF4DsAW7fKsPf5zmCLBm",
  "key22": "2HSERzv2twxT1gQPRiThVPDKPXaPhWjW7vNy7XD5E9JepTJQpSKcMQ5ZGQ2R3is9UbEALvkixzWwJQzdHd98gY55",
  "key23": "4k8dPGGcEn9SLkDbVijH9f1u6SBoBMeRXmQbdzvY5y9R698tQL8wUa1YXqA6NvyBGmsYRMcwqRHVPauJyHFQiePg",
  "key24": "8vWdwPEznUNWhMgRREnpbpt3sLgtMHYwSiTxb2zmzSAEvjt8D22Zw2svu8hb5jMPHdjGFYb1AZx1BPNmfYFR1uB",
  "key25": "2BdaVZNW8dH1kSRWYm6J1NPt2sWrACJkSr2c5gAzmuGoqSB2QqP4oG9H1qnVs6yK6QWk1EeBf1cRLAtKhdCZYfvt",
  "key26": "3FwPNnzhW5y8ySN4MpRt6bcfvR54c6Soja4pdqQKFkKKPuVvYwHrHwbfDrjMUvX7ENLQQLDTa5BWybsZWUgVhu3M",
  "key27": "BfHbBZQziD9szpwof9R9sZKPHwPSnG7L3ZankLmDs896zYTbpw9esgUW1ESUJj7m8PZ4TnnwHi8PoPiktq4H9vu",
  "key28": "5mJeGWYRGhdEQqfT4LFLigTkLdgS4wqZHt31dUPuTiUfycpXbxsxdbDG3VD77a2EAUCwKApZbKSdM5nUoeub5dxJ",
  "key29": "3cAaqgu7RJqfGY728iwpcEhCWVafkrW1UshPQZLcZbg9BKKZq9fgNKuhmHHRxwSd39Bvhjhin9ortyaFJfjE43xF",
  "key30": "4sHS72eQom6fnNAgtFLED7mYKG3mYdmrrNbf2Axo4RRhkFXpMmtQ496U1KyXBLTP4VqQzCnTpki3gVJ8fkZmq2by",
  "key31": "5s9it6REBvZCg2CBYzFC8VKy217aJK3AAxbFGDkcqUsh12YUCqkERMFZncDntcbWyZDag39M4WRxytVRoyKyyfD3",
  "key32": "4bjvTJAruTFRiAfMDYfEiL5hYYwJnNGASLyxhdGoU5XnejcMrEByN1jtxGamxwv9kcEwpJkJEZ1HvzXuo8PAk9mB"
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
