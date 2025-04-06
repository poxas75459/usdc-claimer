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
    "3oD2HgBhPuXKGrqzvvRRoUsAhvgvNgy215XK5v4MXGdncfH7KBhEn74dzqYfqzHvhzg1rzXLYhbZzKwd9HNbFCnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HemJ8CQmjRv2Zwbfvv2VF32xcRoZPfuHNjZrgd6njQRZ3dchFxKGNRXr4kXSKLWLhV2MvifYBwRBGeBJ9LeyE35",
  "key1": "82vFd42PaGKAxfjcNZtM96VipAKKa4ksSvRgWE4yRwAwbVXgVCeJNdrzeFnVkWox4moaLNXtT2s148pn55NmwPt",
  "key2": "2FBpP8ipZySJeSS1zSMtVsBLctRATXaErfyWEefTEMK4uH2nZhJs4sfDYQ6aw5g7xbELWQRr9rWLvq3daD2ajgHb",
  "key3": "3udCAbv5BYvWhoFCte8q6KDpBbB8XPN9Tg1SGHEgMzh8G7rxUso2pKrsg2hXzyjSPN7BWdTTaP2RxbndcQheb2bC",
  "key4": "5YdwVdqNN4vje4esszKD6XH9EwZ28p9quonRbwTroKScG723BdsaDZRiB829JhBe8rT9atM6zcmS8pRQuvfGoqxt",
  "key5": "4NRNuo8znjg5zjY5rkdVUjvgn7h6DxJXWbYCqCPnirJNu1K9DUff2EZs5Yn99c3N8vXsAD37hLyrgrcrbSGvf8E9",
  "key6": "3QmfTCqmWh92jAKAAByark282YzNkDaRRfVUMkF1GGoue7CxTKdr3BY4JmK9bi45Zxj1iKUEwtSjH529kanD9bZ4",
  "key7": "4T9hUCzVyYaRKLMSRRgAayoavU6t6FHmEG6MHzWdSYedZgBLLQCVreDHBuv7b3fKjidftr5du1LdwLNoeCqNbpTL",
  "key8": "5PD2ro9N4ZTqBoqxf6zwX13g8DxbTtZt3SLUoBy3z4A2yxTQ21mnhWG5PBWEaaxXTC7ZNZcPuiU3drZfYayMFqDz",
  "key9": "5JRB6BRH7XLcJYpAA6Uycj1ht2SvMXnTuAt5zUhg5i3fummZjpWVdy8cgHq2uWYJbhtBa6zLZicJxs4u67tiRW2T",
  "key10": "3R2Ue9YeZtDTRspVfzKawNrFoQUnqsVZdHH8aBvrySLnFf84KbpapTGNdGnbrXbeSsnRN2Cu8Qb9LM7LbuLDYiQb",
  "key11": "xHWxWuMaL2iTu48zYPsMpAqiv1AjcHC9wqaSbPCPNtLJUHzLBFbNwVzwy98UTYf8akWo6nntGvhh4BX3yYq2pWA",
  "key12": "5fgz5hRo9te36p7zAWWzhmc1yaWEoDhTm5PnPGwPrGYX81AcaiEfwakYAnVCpzVGX93qQheJDHQ7FKVQT3cL7oh",
  "key13": "3Q3sMDHbLW81siDEeZiUttUNLrMqo5BTCVaBAsf9Tq29AmFTBNpSRUCBv8D2Tzu87ANbynBPMnXc5ZogsATZbJGs",
  "key14": "5vJHtsotAcirdQqNKxP1JmojUQtnRst9ed7DhqQuigQ8dN9pmYPM9dbTMW8dePvUyvmEhuXUDvBUyHvTe9d7cfse",
  "key15": "4tL4S1BUetRWUWuNanHZBPMNrk4fpiSua23KsXW9R37JiZvDgyXPHKNCNsgus2fkrnk7Nya7DD4puwByRzWqSkpy",
  "key16": "gofqYsALzrkh5reTW21bdg81wFMYEZNoAtPoZyNuCtiGpdYijgGDexHLhKuBa6EKNezKwd5LJQngtQqddSPqYHX",
  "key17": "3pHFmrYznQbxcex7PmtPqdiYFrJ8QfHtHbCcKpSGA62K4SLAG9KSssDCDhDUjfc7qHACR3ifsdwazBPHeVpQTUWw",
  "key18": "3JgdbP8XMhyUp5rykzcnKxffXkXNYE5WKrjwYq1yhcggdRxwrUKDi9aDxEUYnd6jhkEtCu3vdJrrfpRJqSs1tyJ1",
  "key19": "dm8AQSe2es6KhBQDP84apfoPeHuQp8SwykK3on4D3D1wrAuD9BiJPc9p1aCsn56TRaWbunTtXws7V8xUvzRH9NH",
  "key20": "4QtLFrXBDEoYDfkU9Rbw1prZ5yUuV4TLyH5P2BJJLbh5iXdiegw9LjNMkoFqd5DASTMueQaE94tf6coDvVmxNEdi",
  "key21": "3EntzucXLfKwjHZYutvGPAceLwmtGWatvrKJsPt2Ldinrr77wvroXiBQSUJiuBeXqYNVgyt1J9Hy97Apj8Z83UpP",
  "key22": "aCVMa4dL92sqt7ceDXrWFJsES3Q2aakAXBCMBE6n47jukqqtzCyPcuPtrwcf1qUJafYMeoNNBQAY5pQTBHGYcp1",
  "key23": "5oyLq6Mt8tcoNo6LH2jUmWoc7eiPNNuhgj51qvCSvqYNW9GNKXxsjbX2maSn6owZQ2oUv7jJvTPweaUNV5jtse5u",
  "key24": "54Ybp4dMu2vP5D4ExHYtEUc7A7WcyNG6UuPEbvSFtTgPgjkwoMKZK852dWPiG71qDrcdE2jYdZCjLZrJ6X4ahYEN",
  "key25": "56A7twPHe4SxJJtrhBdhqNfqYZkEJNtQifC4RsHdPLqQXGaMRYZ2JeUNqfjq9BkTWtTGnDEZ722PQM2N7ovzoezM",
  "key26": "5z5iiTCcL619kZ6RM5uwc59dvRjMQudV3gTxpX9vETW1XGQHsBdN6MeoBVxCUh4v2PtMM3UyaNorhENmHANZEYrf",
  "key27": "5hkmTjCw9ZA2R2cHU2n7q56fXA3uiwPGNNLZVpWGsAN5MmdCqkRLceMLuWFG1r8Lxj45BWgoznFTchiTAg3rbbMU",
  "key28": "4B8Xy3S2QkFyK4ALLaJ3fsz1MVArzDCcPrNhjbjDy7RmQMxttxWTh5pR4Nqj4HMzez1MFfCfq3SLxGz1Dx2hhU4Q",
  "key29": "5uPy85c1za2wiTAnmqwzBFzq9ojh4rtivbo6bbw5CWLbyEGdBVDEqLx7buGy2XYouJqdi3dKDEsvqsXioCKfEQkS",
  "key30": "65fQrkGM4RNgXso41s69hSMb4sFdxTnLqWMtP9qLZp16pEbdv5aiqFie4E36TCNrggn11igPMn5Fjb7Aij6nT9Kt",
  "key31": "3fvESvEYNvEP8dQyheH1zwEafGNS4ky1i9X4yEhaPqgtQiH8u1t7bXjzFq7ZKkaB3XxNZeupmraoT199AXXqFffH",
  "key32": "3T8YHprWXzPa3WZXg2Z7zC3aFnnNEKLVUFhRVfsnn3bP3va9bkQPL3g8bAgrnPPQ5XTmfkGUgtX87DyQcV3aSjWc",
  "key33": "5gEb9oc8Mc62oSevruqaN9yQnag87uKbCs1bjh82FZJvW2dtX7xaiDtcYxiPjQKFg5yfHioA6KcyyP38ZsXcDXx7",
  "key34": "pWwrjesuoLhSTRSWruyAypgAF3omGwV1UUsgpQcwhWy5GDo1mUXtGvZ8ifBUH78rDaH7idNB82hF3RVqKxPghWz",
  "key35": "27kmZ6QUrVzstvPf2GyXZ6eUj8JwNr1QPmvxJYcysTADQavBD7YnhPXWvnftwvyah3XYVCqSmRT5fzZMphgs6MgT",
  "key36": "4Bq3WHLLXYWcGHyS4jg93F6aUuFvUretMjA96nTzWMM547Pf9ycZn1NDVaMmGtn8YGRqnyc1RfFJNvLdzSqEX1RA",
  "key37": "51Ksq3GsZ78miYVN2ezeZvfekp9j67rEDm39PUHaHjf86qM5HCEy4FZRkY38iaQ4cqSmsHLCPKfDWsVeSbbnvZ5F",
  "key38": "T9FCJKemsj6vp19zytx2DH9bRyxNsjyLtLmGJeHUtLtAUhG7jbnELXvi1qBq3jnbkfPatwj1CYA8TZKXU38MM7m",
  "key39": "2PkgqHUmDXN72ScBpSToXjgm7KfMVdoLHDkLtmQQqDxUkHA567w2px21Vo7NbhVDDeJSfXaYPkvM97ZyNmjjJGQs",
  "key40": "zfBBEq54kLrwZRwCxDZBaHyW6y87n5YDTobfgXiGJWVvmZevs3BcJoHhsQFfdmXd84wU5cSxgqpveXLTBZB8keN",
  "key41": "AUjCGx4f4ZwzYCWTRL4koNoQMMHQbwTyPzaxwMNKewNs7PPGPqTf2oCQwoA3p2TenNtquKt2qmaGWX37j5TRJPv",
  "key42": "4F5So4TiSi8rXFG2t8Bufqw7fzPy3MtMEuunH5F9FwcsF3JdGVWTdXnSVwghMAmZjjSB1vDsXRYYV5Agy73ZCdS5",
  "key43": "5SqQdFBtCKqWfSpurLmaQzwrkQej9QuWE5AsGo6jPpanvj5q2srFuTDxxWbBsZMtTGT8hqCH58zWR1FHgydzKktH",
  "key44": "LJR7oU44kKZwQMukxStezNvc2g9NKLUnGyXVFXxa6kiHnsRrWUfwoYcTnbkj9uKtLRq52x7ikrvLH55RWEY8dpE",
  "key45": "YK4RT55JQwexSqkAWhLxxkUrYkDPLoc6T3vZevMcAo5atsDmtfw4ngRxsNSwrRU2pNhgyuNrY2PRaMGKAERYV5Y",
  "key46": "46mSNHkM2vEojMetcYgyvza4oBpnPUAnvE1UXDG6tc81LWMQVuBBMqQwx4ik7zm6TzWeRUfjXegsFWAktCZoUaWi",
  "key47": "3qnfTNkMukEN1pewN85tc6bqmk949qb7LVSGurfYjtGwxj7QpMBKoT2LDrpmuf77PGCHxvKtNZs4oz72fyEmXmDA"
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
