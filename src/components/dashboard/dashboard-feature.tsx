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
    "5M3ZAfvxpPpdQdmB8zZvCV6dcMqEXojJoGyutYNkMq9X65rpp3WZgXTNWzaa11jyruaPDeynxKfWXNUH8vwpd6hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RopxquHZf6TRq3Np65dHttZgLdgsfthB6BKff3D28vPy6TMNF4g5rBDBSWA2sWGvcgnMsqErcySjYSEcWijBDQ6",
  "key1": "9MV6cNDxnVES3mANsqvcxfmJA91TB7xdTVALUA1fNw8T34MWkVRSe4XGeqBu9vHf8tRchiw5T5zT48e44rE7uVg",
  "key2": "4fE73iGpZkH4g6iVdhx51xZCQza6ZW9jLNUYqwrdU6tXiKvW8QBmS1kdQYGGcy3mRB3G5Vq5kLVKhWg7cGAJWQst",
  "key3": "3KSYLkNVYpMNR9rN9XxjRigN5B5wQsUr8hwKR51ki9Es9JqRtNu2SqzfxkrhFK6LPZBofmiQiWDmFEhUiA1SqHDr",
  "key4": "5rsDC9nPq3qHzThZZFt2KQjqENEpJwjCqzz4mnqJQWBxLamizj31qb98zL3Xk3wMSobGqakfKuiEqTc8VReHDY8N",
  "key5": "3jusTbZKDdznesnj4LvqeE1BRtTr3DdHfHvefPt5saD1BgdTaCSbheLuKKzCxHGWo4BMKzjRnCKEGqZV4F8CrzYf",
  "key6": "5u9dYiZtBwMyhUpBeE1gVnEv5FStR9NZ3Svy2TSVnUC7cfudPBoKHgsc4B4ttmHyhXt1RPpWVXQVW9AazrhzMpq",
  "key7": "LKJ9UDJP8m4DjU4j9WHCAGWrYEDhdTbeoBGdKGhRUrXCx47sKjGRPymjtfDCL1kLgWiyuXKVTrmJF39UEHS1bAb",
  "key8": "3Ed7f5mpByn46oohYGvc2VKWGm9gGpzbKmmFtCoMqbTYeLA5fFtRHqngY6vi9quBLp9xYJhotjDgHy5RABo3BkhJ",
  "key9": "3AP38puosFdTzh9Am5EsvXQ7zJp51zzD6Vajr5KSfDKJpc2gCLpiZqoDjPgewVwfmaXPhxy18A8nBh4ZiHuiycWc",
  "key10": "5MBScesjujw3jUVRh3UJJuGNaBhNkU4vQWrpxgrnAwXxrvqKS2RYvaqbrvvC4nt1f9szBi5t9pBww455G3DSUnqz",
  "key11": "5sogmZt731VmvbRnorgQJWWe5yoihJ1g9xJMobM13ibWe8CzvGAh8gJrfz7uskqL6vPbDM2CEBNAuHRHodAPF983",
  "key12": "5yuaN3ZnZYPMm41Ab8HxQCrzvijj8PAeJT9kwqVMj2RhiMhbTW4WecKeJ4iFVin9MYZJFbWXRXwQpy69MnnNDnvF",
  "key13": "4h3KG4Pgrwb75j68kn3dvoki42y3488eHSkN8AMni83oLagaEX77EYvejkjxfpkGKwyNQZ7kRHPuBtVvnRbL8wWb",
  "key14": "3KTXrgoPDXYdQrMPYcyoweP4i81zuPUhYDyAvpg2fsYipa9bWbJ7DJJiBxztUhQh8UcBA1ndVk5GdKyDjwk3mHEu",
  "key15": "5Kq85fUbWCmVRWFSi8rQAD3WXXQV1MRM3jW3Yx81wXTenfEHCQanftDifR665Phpbcn86NLTTJidN8FFf4Tuh1gC",
  "key16": "4gqE4UCrqbNWPFBHm9LVMv6JbYeEfWGAtw33G2PqsQEha1rfdy8Sh7xwzfAw71Gsh3QEC9UgBZMMVv4y4nA9zunE",
  "key17": "Mof9RwvZfUhQkN2jf7Ucdkp7dWAyBHgxhcYLVPywm6X7N9CpuaQCKSj2jEKzq5wpzaVG1AjFhGjKE58kWcP5WD8",
  "key18": "29Ph1UCvE1fi7tD64odkPzBUeLfmibCpfik1tSMbvo4qaajnojGkqYykEyQogy35goHSa8H2pPC5AdxLy8eNx1wu",
  "key19": "5TXp2tQm9RfNK1w9PyQzEYcrNtiqM3hUh5E7fMvmRFUJ4MmvGimywgGHTr9A13ytM9N6wtCPp3L5SoscCgxkLbGc",
  "key20": "3ieqGWMVJjNjJSuS1zugbyEEKiPxMnamQiWURBaicx5YcUnh1NgZvtDQF2RcmfdJudmsNdmJJTDRR5EaGDGSKBUQ",
  "key21": "272so9ukRxwpKyJ1NiPnXXqAHPuLvkXnhPg8CbZXxrduYvX37HTJo1MRAy5JuX1bQqTEkJr8tpRK31YcQ3D6txZ5",
  "key22": "4pkmYhtZvS46MT2xymqtSFTyDtqDsfNYnSjkBEWxUcnbqYuUVNoJjYH3wzZLL3rXnoCTATh24yH1T2DgQqyLYFXp",
  "key23": "2JQp6ChBUduiYAZTftV2AbjWQm5Po8acy4E4xqeFJ3m4SNUni38hDYxGP3TKoG1r4GGXBqC5SVLgog3jW4ijtKkg",
  "key24": "4oH5qjGQdbwhWeZMLcwBF5jm2HwDYMJwVou3nPGNMhEBihV1ebo9r3aenaxJsp9XUQvocxcfbtpwMZqjwM4Q2djg",
  "key25": "4CEbcUDugiTHYetAd8zBkGUPhySo6g7J3d7BxeTUZ59eTDHMndYGzMVYF73e9Sk1zZojviaim514Sy5MgwSEoUkb",
  "key26": "2u4LmiSVwykuqkhkyTdafNPjoQ6ExD1sQDDvG6DLqayKtJswAAm6VZypH5bUXUvDRk4jP3TyJFBopn7egJ8tA8DM",
  "key27": "3T1j5zQBVXQA4RepdeeBeRRPitU873ebjE74wVh78VFsYHuazzn7uwTKHtHK3xok3c4wE41bQE1tBNesEukQ9TBq"
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
