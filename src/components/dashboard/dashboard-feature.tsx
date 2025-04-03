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
    "2dVQoovrDNjDghpGY6HKLAJaiSDupdkdssEp7D5dna2V97NHmMdbY3tYqjF1XrUPEng5xPb1foDHczBEgDY9BTPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtEjqCHpzfe6CNUo1g6shmsunxCt3eKNXYkpGpensmtTj9daXESuFHUTFvqQ3Y76cB4Ci6pL7o5pEG7fKuS657W",
  "key1": "52oRF9feXG3qsscBrYa8eZeduphG9LKpWgUoCFQFGvqXKCwbaVvXTcW76xXQHVpSrko5sFyyn4BgPEPXsidtsYCj",
  "key2": "4XLPvXXbrWwnoCbenntKfjj468yVnH1gW36jrd9PEThFwXiyXfxvuiAGFwCqfr5WD1Zm3b1QR7Cqo8P7w277Fmc3",
  "key3": "Aqq93gJ7ZtUVRxxy1WRqgwbjyDs2N3ndWv4JJwEespcmJ7ZYYNCLjaSzdt3xLJyGVPyD7nd8vazMUeUod5wfkJF",
  "key4": "4BNNPvaEZeFEFcdpzXaVKzze8ETvfGiUY1xWrnu6we9iJdZMuctktkEyaiaJnPB5nb2z8P61SbAUkzkXG5Yry56E",
  "key5": "88zsQL8DhXesXUveBcST7dK18mmtrYsjt3BmcDnmrFqJKAT5ZJ955Q6F7yrAuvLxxXj7TG54bcE6jkTuoTegwWy",
  "key6": "3k29iSdzEgoVRXG8qpHhPBPHfurvBEjH575AxhZLQgCyTu6nv26G7xFJT1pkgPDWAiWPxi96fjr8WrT2GCVFMRWq",
  "key7": "2qjgef5sBziPWctbwK3TNm8wDUDz42a2sAQEjD4UMxvYsy2rnZsFFbaJ8nZjv8uvwbDGxPvFusJPnoREEQq3HcW9",
  "key8": "2CZ2SFWbJkodVv6jGNWCmutkHe9yveLbGscBgazCDD8vCaqnwLdAVxjHszSJt5sAC3KYUQ7gBrdSw7nQeur3KEbz",
  "key9": "2pwgiDKknz7DjwGqYiAREfvHbgzGRpyXMUAsvEz4vnCC4V7rkAodyhD7ddYCyWBfcRMiReyo7PjJzZN7j3Lgi9SN",
  "key10": "4AWpMrMie1XvJWm4oLu2v3BiVSfF4yRSwWTGxtKNzKTGVgkciWDSbP2ysXwEYhAFNstMo8pZXyDbTGDUSuvyCZn4",
  "key11": "5YjKRJpLjvc69pg7yQuZyf8RV6S9fRaGWXrahVvCCdu1TAkuLEpEPGGQ9TSTAFd6snVyAR3FKgV8sxBjUD1k1iu7",
  "key12": "5ME1fhQcVs4CqPoAq69HXXYMD2osWGmhJxXdq491WMCB5xfhH6MeK9nDSUUzr61neLjMv7e4cjE8vd9yRz85Taet",
  "key13": "3iyaRWPiihMeHcMzzAb1NgtX5jm6NyLhNFHpZ7aigNhhAyQ14pEZtnoggKFwKn86TFDnJiRj8DFHopgVMYHdT3Jx",
  "key14": "jST5Uvgt1vmPnAtx49FHxf1y4haBA3nKaVZFN1W7cnPMBjdw9g4wnWfqqX36hVSCPBLsMByUecsS4tVR8NNb9Ao",
  "key15": "4dPWtKukJYnuuKm9gP9ytvQJ169JnycL6MmP3s6yKFjmnviJ3VLiHT33EeTKsuj3cNciRAHBrVTmjX1v7e3QHBsg",
  "key16": "4B1ziM7TTjrDPwxZYLBsAZaVKpv3NChGrs9f8majUk5aVC8HqhqipNbnQkPfPFcPmzbo7M1Mm73kVwtshjVhKevf",
  "key17": "3PT6rCYfGSW4R6Y6US9tgnK3JZcSripAtrkB7xaqPkqFRQcoRcHQtkjJS4dPEWDRAEwUSKip5NNM9qP7z45yTZoX",
  "key18": "57yStabGchMy425h9JTjeMFM2xumU9VMYi39mcm2QF4VoRki2EYmKQyMQLCDiryMQjjJgqeSKqdtU1bizNCoh9br",
  "key19": "5XDXdp2u3wubMkX9dj6wpqtUXrMzAfQwMAiUodvDE24s1AEsjVCic7i3QMjDAYbqDsAqdVeUHzvBtvBA7N27mZFy",
  "key20": "3CNGgdEqGW1Qq91PAB9MTdWjFshHUrLoGVmhhBrGzADwBBJixqyB65afArziAouT6yFcj9hDfZJp1nb16Z36Z5Kc",
  "key21": "e3Pt6JexH6YZXwLVcStBnR4MF19kx2tBBHFRfi1SPSzCg3fhDTDB7BDb2W5qfkjKKbEhrMrr9jp7vzheLULRe1t",
  "key22": "3wh5sdNc6D3SY16XKxpgT7zjz7YakEhiDmYYg2Dq2yCguBbqiphM2dvZP6pU8EEoLQQd83FBXehi9RxsZkPiZAhC",
  "key23": "3hDWKtGnUnUhgfZqzz8L78c5ZSvUAtWSWQaQi1KDNN6ECNLikUERUHLc5dCHgXqVcLBJmXFgsaCWov8VFNiAb3z2",
  "key24": "5Vqx8bzn2gr46dpB8WfvdayjCiZYyfSnjSguar7JE9W38BN6ubYA9jBc5QFnKHLsNhc1HKSsa7ssyhW9PL1rv71e",
  "key25": "4mfteNnwqAQkvjjjPCk525Bwsr5WCZg2x9QiNkek6virxEUX4cifqqssaVc25vLBW1cUGPF4yrUCuGWESSrhrcxH",
  "key26": "5nH9qxLQBe2e8DFP7ZxVPkHUK5CxrcXwfP12BfKKETHfaC3yRV3goukL55mAXesZhEzn9fcAfKh2mXCc9eLSn6VJ",
  "key27": "3xEH9EMHZ74BZGXV7LD6X3QNDnWrJpn8Zw4nF86teD3TYhveeDbcZhaRUDp2DaFA8Gyhz83SYCGi8aUHA2t9HLUU",
  "key28": "5AxEsg3bQeT1NPEAkEBXJACZ6xKiEV4zJTYGCHoiJkkU1YdeTpSk7rx18kbTCadVDWbgZ1nyUqPMm6y2veqWBMi3",
  "key29": "3ubuASFRYBNWjJmkG2a5Zr27brYvSuA9ZX7NcCN7wVnVTbnXZ55JhLzo3asfTuMe63ey4B2u3VtWhinNj6zHnpnN",
  "key30": "5oKAFwVFxoN6hs2RBUrhKctkDGokqAbK5RSSb1muuiQxg6BeGYurunBEwGzpZykqLDT2reEnvFSVXwBTun4N7nDc",
  "key31": "26hVt2EmSgbAJeECRhiN4Qyr9jk78GZwWknFUPwww1vWRMCFR8nufnAsfwX2czCXFSbzzbv2pPPhvVwH6UZd6YAX",
  "key32": "4FU3rGQZe8SschjaVKziCjJJ2r2SuZnAgB3jkUVd1W7dVy6v9wuAqvHzqDg4PnJ6thx8DnVTnmR8rMjG1MvFGBay",
  "key33": "2ysuiSWKW56nBd9P8dTNfSe3MrvPjwCDLYzud3Au4iKiUUJJC1U3YEjE1UdCK4cPFXfBqPtttBfKmDRrc5PnK1Zy",
  "key34": "amQQjtkmGHFPuD7m5tHc6D15FpzZiArUA8JBHEb8RPWNALTd88SjacHZdp5vfp54YaXKAw2u4M7AWptA93YaL17",
  "key35": "26USfJ9o3kB5nQNyaQoVLJ9cFbKVPpWrkoqHbSE4irG5MLDU9eF58NZ4SD7ToDMQMcH3XM6zNonAx5eAHYkB34zw",
  "key36": "5dHV9MH4aGNLuw6yXnUY4ezqF8QdrzVoSdzLApZiYNoB4JwHGZ2ELZLyxqx1Mpr7kbCmAvEENosbgbeQKFefZvya",
  "key37": "4zFB9k3yMjRGrkqU2fe3CPw8uBXPbY6NAKf8nKjt9WuDyUZnoXFHwRkBoJEYmXD3CPgXYrmYbrHFjgnnqPGAASaU",
  "key38": "rsLCpJG2EpYSQu5oN3YdhiNMSwnytHCsZdK6tvDgDqvgArQZzGTaeKGhuWfQokxhqRgtVcUcTiZDLYWEQinW4am",
  "key39": "3FkjVGGXxhk3ZYEwcPfUqgG2KqnzyMed3TPXGrK1FqEpPCqit2dkGaE7AgviBuecYbJ9rJAukynxpT1JuWSH7nxk",
  "key40": "6NdF9hTamdp5dHce797Dz5dYEd3n6RSJX32CQhkPEEBzf6QDCSt1m7uP4gD6KvfhiRYQJ6YZPicDzVgEPBM99e1"
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
