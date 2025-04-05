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
    "2motEddxEPR6qDo4iyDVEae2tHn2jAgkkFF7u4BNtSYQ11FPFXTQauryNrYGCtJ1qTFBzSw2RGs21itdBaFStnYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663NQ7YJRbpvh2MsKuCHqbY4va4v9m6WDwiwCx6Zuteo2mNq5cG6NzHoeiQuUdZ9v3hVvnqPo3DCGb3WgWZwGi5g",
  "key1": "5q9vxW2MCSPfLy1XP5LHMSKoDVGukFXbJ3cYLDWf99vAJ88D5tC8Tk33AbpjVnXVzU5saehvWKqrG8KCYYjsjMjj",
  "key2": "3s8pvuNe3PoQPU7xohq2mU6W6WoBWACtNnM6qfLuaWTM8peUkicthr7FBd4Jsd7VyVx9Nbo4FcbCiULEjsgv23hV",
  "key3": "2HFBZoxLZweYpmCdjA6idvo9kM3qw4CnMpHWSQFoboU91b3bGD1AgBty4kCKXtGAkbt3jmd5YNs8xu62eidMLurR",
  "key4": "R3825uxMZA7EiqZXUPom6JqHxTR9dSsjPpMTheZ9P4KbVFSwVqFNzyNqUHum6dPotdaexHZXA3f1oQm7PiM5HTY",
  "key5": "2DYCnpM2fxHmt2kbTW9CwupKbnuAaW23i9ZEd9jerTVen85ZZ7Sc26h9sd8jYHTbDSkF6DoLFWA8ryxt1NBc6BA",
  "key6": "39WV3KKVgZXNQN2MSQrTo9WUgsrk7k1MqUqgm962YcKzNphVL6hKqkePdm44b3HPV7bi1YDG7yPzBqhCFG3sEUnC",
  "key7": "51trffeWDZCLNDzArd7ToicDc5gj6mQkT74APmxrPEAiWNHApNpv6Ea2ztEmMrvD4xJWroS4odafcPuBNn3T2XrS",
  "key8": "vh7kNPv8hvaEdnGb9uatT4Dr2aHVYqJmAExDAGUjyrbpaC1ASa17ZzV8CV78KMQxoSeFWJRLY2PzfoTjV88RTps",
  "key9": "3JsGpTQTDXijPezpQxD4jrrYyyq3vJhspH3vYGQrMbGQnVnutGDX67g6v1cRxe82hCMm3omdaNdQMraVDUNKV8Em",
  "key10": "5PcVQ5yeXP2Hn9jcYgoAmiMdrtCquVtkudYKwh47VVmzhw4xNudpEuPfSoEmVDeHQMmP5ArZFkyhMweL8swbEDZX",
  "key11": "2o3j5wSSWWK8NbVnBmr7Rpw7f7xCCgyYCo5Zv59s8Qswd5u6Ggx9JpeTxRqnasBNvxFyh3K2vnXhV141gzgJFxRL",
  "key12": "yqA53U4AfNJrXYAgTpAoCFbYBmhDLWJZG5Wh8CLn9tgcmxsxQJSeXAfTmHsAt671t3rdEuHamvSsQgvZz6M8EDn",
  "key13": "4MS7qgS5H4nyxnPPodPcQKxXPZ2i4nxt2SweXRge5wZJpaV8GgjascQ6DRRzuCawM6QwcZFpvtdZL4vafmw97q4H",
  "key14": "3jb1tVgUPBCG46tB9RzcqLfaquuFU648mg7RPu2XjzngHintsxZLvZ9NcsvuttxPBzu12uGg9YtExZEDUR5uXcSX",
  "key15": "4QK3UVLN1ErMt7yQowcXBQp57AxNVU5CRYF3TuaDFgkR63h8kLoAnZYepU325she8bXDq6F6f3NgY8D4SPQREqT2",
  "key16": "5nA8udSyYEVtNHiq4epMu7rXPQe7SusQ18fnuoZchhrVCYj9EcLC2TpchRm7He1kHHqSYKrHGxGX7yttCqRY6CSW",
  "key17": "3kHc9qT7DSS8a7LP4VmsK6oPruW1GaSiBeSCV8Hw1bhMe6jR8xamMkuCB3TjH2TgMAsZgEqnNfSY9PYzYRtCT8iw",
  "key18": "3wByEzjrX1oXBDuhsUuip5gy3ZhZvX9FhpbLZSaH6eHTBXusXedZgVHsKR6bn2N84jwMbFM8seHZouMHe3fpmBFZ",
  "key19": "2U1kFYS7yEFT1tRPX9qqgVFnHn9Sgun5ZVux7t8sR32nAVP913xU7heLiBkJdNCqT8AXJ33h2xRy5L4YGFBr6BBZ",
  "key20": "3f6EMQn5n6j4wBb5daJ39AuJ3MgwjVpocLcCvjqFe9ttWbYa4wwkijSEJjUmakPd5EvLGshkxFyLt5egR4ytV6xs",
  "key21": "3AAUUhwRS6sERwUTjsAjjN5n2dquSKD7JVoFvVhEj5i65w1ax8e79wYzdBX9ox8aXoVo2P7kUwVTCnHeLSNTVrWr",
  "key22": "gciYM1n6UEK5RZQZXseST5xknfuoaNsdoSYCMjR3bCxASfwhvCj7ihoKmj18DpmSzBdrizV4JRxrA8fXgzcNjKH",
  "key23": "5XTrHjwweCGQbUDCTb1f8ucFV2Gdr1T8vxpPucbwiD9whaRHNcSDZnRoW283Wwhtd6usySYCj4r7nBaJbDSxSdX4",
  "key24": "NcTB5grwQ7fAAnmckwd75mbHjqtsUN6J4D8i7pN2RRehpEHnN8RpF7N8ByqQEWQSW8YQQgHhkCQ5wasVPncKG8M",
  "key25": "3e8fpXswTav4grXkThprYNEhSZAsQ67jYqg6DH1KzL2xyBADR2SKQ4XVFGwhKunoB41L9bqLLy9FTLEtTvYcPcJ6",
  "key26": "4MTfFwov6jM9hR6AVk8bAGYqpQgpSXk8HnsaaDKDA3zRCBFvBTQoePydGLHCE39cGGARz5BwVCuUVQywz7duYebd",
  "key27": "2vhBq1V1gpdkzWZwbbY3pvaM7qin73copRspKcR2PKR3WSCdCYReYDp77up3yPXurLBXj5ogVTeR72nMvUwNSYYp",
  "key28": "4zVQTN5pQYddmKAJmrXPds9MmuvernHQsZz4QhGfeZCHbXPEaWQpJyKAL2cYe6kpdZPhHbUVkkHhQwN3DBXdjQWS",
  "key29": "2y5xYBqYFNBQDjT6CzC66MSR1DfSnvZdCdQt6JaLPCrBvw5LEaq3w6oLc14wMEaU4BJ93ZuRuWrY4wXizRbujnVh",
  "key30": "2teHEZdZwik9QM2CX1AGwbRcvEkBTd7oyxyDDakDkHuxKY4FS8wm2KSGM1pxyyUjbtTqAgnXRysgzuuWkyp1zYpx",
  "key31": "YjnPbQ4uGzvi5618k3fdwtbF5QANrSXJbyaPtPhN8BAgE9DQFu4nnEJLmQaCbeuWU6PpNCocugSccKbPeUQDsEw"
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
