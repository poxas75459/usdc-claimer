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
    "413yTkKA5vuCB8iCuR6VuHLEjS85dh6ztdZRhKPNq314JGPb6sLiYSt1BGh64dq29k5enx3RPUA4PB4G5TBgbW7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ta3LLBy5zrnEjRjSoRDs4SwM1TK5srE4SmJBg3wcWfRpkMr2ybQuoBSrwu2FjTvByZU8QFwQNjr6edJiso5VhAM",
  "key1": "5LWCmwidxThkZVi1jvCUL2MXHCAMUGds3NBeEW9489P54zCGEkGarnayXahoZZAJG4Xa9CHb8hskQoDpENSC7mvL",
  "key2": "2uhCSBq8JUEEgPkBzuDubavE94yZ52m2XBthHyN63Rk3W3MVWRuhrFAMEe5EDinpbSrt9QzDWFZa7V6UtfMa7ixr",
  "key3": "4KTov7NsdtESW78MNY6JgYb9MDrwk2vSwTQAYRBBBsXKXdHnctZbG456B7483TvvFqxwD6L25b63HQf1hZ9CVGWA",
  "key4": "5coGzXVxQURcUXjBBDgnvXb99CW4cquCaJvbvjySTPqr2VwkyAKiAgxyLa7ejniak4s6C9Z41VZWgHybJZpYMRj5",
  "key5": "3YK2pUNj8Cx1xyDtbrAtTYdBwX7zoMu9kKBdNTPeyVNit5BRGqM4jHoVS59mX8JrpGvRhn7FmdMQcATFrSFuagRi",
  "key6": "5omGDdt1WqjVGkhafJRqBtQmwyMVhwwtMh6o6AK4UfW818MDP6mj8kVNUufbZtTq6q6DNJRXshoFqAGxTXB8Ho98",
  "key7": "5Zuk7g6URUvzYy6hWeh8yaEan6KHg8Rx264iaLWX5e635ae8XfjCGPhgeAje4Rc9rnL4V2GS793aAEBwff6HNecU",
  "key8": "42orLjYr6GNS7pxYGkCkyFyJeA57LjuQeg7b7UUpDca4xkAZg4QPHruxSBVCNfttZVaMtTLsGS8gnacDdkNGJXr",
  "key9": "21rNMJwgnGRsyKw2gq5bNd3yqeK1h5sRE42HTyNxfcYecFqMMXb3qxop8qGtUjNe3iZc8Vrk62m7Cpp2XXyAdGD4",
  "key10": "5w1H9ubTmK8QzqryjrbN7WacxS1mA3eycpeTmdJGZxjXLMVXXdHPVcCuoAsN1M8P7F7r2wXkaWyRY6xLPA8CpoTD",
  "key11": "5tmfzHThwT7DNNGeFhbxGvBohWsPFXTLBWBVKjKbaurtBzPQUuoSGUs1CVBCd9dGNYEtgaKZMAs7a1avawxzH5e2",
  "key12": "4bFAMiPLkbNqCL6tzhy9JznfmdZ9Yk3jjdqRq2YUHfroPdysN4oGYLf1ejhzYyWQ8Dx7iywvZjg7e66uvnFuxS8p",
  "key13": "2k3CsNhXzvHkVckCTdFs6oNN9HyWzhwXbp6AYfHakYenHLMna8LciFim1ufG7fZxpWVimf7bvY7TVGr1eXerDYTk",
  "key14": "3yumGz52UN8GvKqBYtFY8rzj42t4YFhMh5DLmNpR11WU2cUsVhPbSgDxif7CRtHSaQFwrVhFaF5H48rSuZPo2LT5",
  "key15": "2kvSbcHhM7vpc4VodaZ74pH9aKZvou2UhVDZUKcqk8cmiGB1KrV6stsCvRq8EkbAQVqCRE9HbzjP5t141rREHtYD",
  "key16": "3HJ2tt5D7wVL95kn6PqwihshFNxzKWvkEtVk436iKTYwDPhd44B6HN9eq2mYjeyxzntTmmyGEYDWqemkpZ1JuNvP",
  "key17": "2UTCRkLw9Dj8SXVaVutLh6QuzNokUFYEjfth9fDH8wHe753BoWNXtxZ1hnGdvPKFGyQXmHKF5Jm8BD8aEQAnTLXw",
  "key18": "2WyGVtenASqM63KFeDUX1JGuqvRCZzdm9wLeAAHUkv53q9hRSymPXy6LPB3fHr2uhgoYZCdh5C5UMSvZdovC9Mtb",
  "key19": "56HjN1WTUZ7PckUkyPGtKGZPsn6QJNFn7yyqBkptXhRKA5VPYdBqBRfNQSPGrCaFL8Ak6MtSPNUqnP8pqG7XxAak",
  "key20": "3YMhUYpYXb6GMMtrpaornuw6Hfd5JwoLL6FbrH4JafQcNSkYD7h3Q134eeNYPKRwRkvAvhVpbfDi7oYJ6zaLPNGg",
  "key21": "2LDTqq188TK6SEfayCTCUcJtydaC1UvZZwokTcMhMAxCvf6GWg7qBg41TiiTv7pR4L8aDyGyVsF9fWitJyZYDCQ5",
  "key22": "3KjRW3sLu7VxbkHY1jNRoX4YBuKCd9Bt738rNLcLYfgi9cwTF2hcPdGyaq3VSCzzKmCSAZJfD3eWDZAuNbWk6gSM",
  "key23": "2B3uy8wT6AfVW8T5TZNdRvqjY98Mwpk2wtdXqauxNP82vFQtDo7AvK6ZaFyxvJTKHu5Hm5wFoKdcuQjRCakzaZhM",
  "key24": "46X8pwHw4NTaKBgqRt9bH7foiMfxkLyiVYtdiVnimwTcxmH1TN9rpCA6Rv36uqDMPcvcBoYd6tuuYhXRQoo5vAx8",
  "key25": "4AvFo7mKJWEaXiHuvt3EqkRbDVsTPs74CYQ4vcbUFwswJv3buLTndK8RMzAdN3hDdDL6JuoMhadGdzAmh5eFf98a",
  "key26": "2BSkwdmVhRKbj78jATt8bhEnU8KkQNtcmah3uhtfwE9wU8CMNrkSsD6EAbecR3fFZgPZEkAbAeWRGfaa9cNkVuru",
  "key27": "63qTvZh6wuqjfDZ177Dusw2iRuLMz8Lqqs4M4N2XExqyGZtuYgy4LLz5g3zGi2ZEWULRSGKnv5szZ4ZEYr7oGgVD",
  "key28": "5cACv6fwpFZec2eP7QjEqvnEo3Z3p133ty3Go5qA3GAUt5PcTHvMZFUoiZ23A6iJuGG9wsyrHmS7sW2ZN2oAxskx",
  "key29": "52GkQ3z9tdu1S7eTJmhCXXz9vWNzCCqJLDPoxDKBLVeB6hhsjDmVYj9UmohjxdbK4Ux9eUKZ7BGLUbiK2oofF9a",
  "key30": "4LerAxft84nhP8Y9srZHKgUZLJxaLuKmUTv5i5uJSo84RCNjstw4iNCPvqN94HRtcZb8E2ubeSPdpja7dVXYkNKv",
  "key31": "3SLCK91mi8ekKhi5ryaGJnCVXKsg2whXAy4omjRBhSoBKKHmRy6SxktG71VG45ci36iERjePkZSudxRU4VEPwz9a",
  "key32": "5WAJTsT7uXAmZu7L4MFCUYB5RMrwCGfz4tsLGnjCyidECaxuyJUCh4xoZsWPSKjDrYfNcA5nrCbacusyd1DyF1SR",
  "key33": "4pBDXeHXXJGfmFnWfybSz48QdL3TMm6TKLkhN5R3oGUaMGsXsQoKZaX1rXDLEnMtPw615r6St3kZqckuot4AkdMS",
  "key34": "32JvSqsSsre7BkVcjC4G9pfj19VJTPXUsupcRgmtu7svKmYpnmFwzD5gChP7gfNa8KWtCdrMsfwJscJsS6V39bqf",
  "key35": "5kPuTx1eKpqFhtsU85miwLB8CqT1rWRs61QsVuKqHUox6UmJqTxunpuuHrzC5K9hRiDo8AGoMJnji5Bj21ns6d87",
  "key36": "4sV1xjuNM9n5dfRKGo4EZTPDSFDP8y7cfNkJYihDj7yK5ByJNU7NcpggHHFUKBoAahkuDSddiXV7hJJ4BPvNd89x",
  "key37": "2dDctHSVDF2Cp8U4ZqBXTEsVyK6NdMgWBEntxqUGieEUK5BPGNrgA7Vo3i8uSsregLiVsCLxCPLDArDBNs6E26ft",
  "key38": "4GMSb3i3VHFQEXGN54rut5crfBqubFXBY9RDnEYpZwdM3HpeVr7Eca3kxqWV2CvktC6TsBL2JjWEK3iz7JdEqgSN",
  "key39": "5Kz1R8FdjX3W2vrm6LXTW416qEPcf15As9Mk3tgq5Q8YJbjMXVY46eNbUzSuqfbq7xvKH6zkoBZPeXkwU6Pt3gQA",
  "key40": "3KBA2afixcFK5DoduuUxj8nAkmUR7kSepGW2yD619hRhVyR5jmGs2NmYUzbKpZcbxsjyRTCzPqkswA5NSLmnMdXy",
  "key41": "5YZ8dKzYrPfmSufp1hvCyEa4mmmqPuco7kcxGQB6Qb9erEaSTR9nEqabmBzpzeJNdJjeJQhEWi25m5c18S92uiPy",
  "key42": "4tccqZWNMgDMfLPTSbEXWfwpvVarHYdPBMwxgcNM2u6QxQ1f6ds84gEA8K4CNTFZXumkFo69oK2XZhi9equxfaqr",
  "key43": "2Xuiak81NRucGa9SMGJppeYbzDQX86QGZXR2zqEppsy1121b4jM5X71evB1bfv33TVALqUVvaDxqxHQyYEtiduNi",
  "key44": "3bvh6UYdK9xsDVHQX56X8c9unuc8tm4PYHnUpQZNk1UF1ixD94kjKtGTZvnhsbqxUQjCYavvqzJs64Q2XNC6uDCC",
  "key45": "58VDM456qfqaAGVKTMCiD6d3UyYovfTcmeZ1irdesP4GNiSRJZWLYsFeVrzbZoSnUHpJPWcd469YHdjzr4a3jyqQ",
  "key46": "5yStK6YhnRAD6pq89tgyyd6N8a5GhkCFq1xw9LrwqaEJVKVR13tSnR8U1347dCozKWovEqvuUdnzQE896Sc6mSBv",
  "key47": "32Q6dmHFkBLnmgwQdtHw5CczbHzNS5L6p9GFQKpx8SXTCHsaMFqFJB7ZDMMGZt9x2h5FoUd8ngaYU4HrkHSi7hvD",
  "key48": "3MGq7aTzqgEgBdCjqD7zq3VTxPx9xqUFyizC3kP268aRLkbpcNGr9SFTe7te8naXUWEURasKw9ejjVv9xZNybjVt",
  "key49": "3AhLYH6LtfNLTt8kc4b7P54QS2NBXDgBmgKe16TvJeXRjyG6YWUJe2Gv3ZkMoUeHENDKXU9JXcEZHoUHuRd8YSDP"
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
