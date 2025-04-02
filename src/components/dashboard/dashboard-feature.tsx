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
    "AeKXiyQyHbrkouUSTtd2C7q7Cpa7fytMmkYtZ94VqyamEJBLM8e5azQt7YcCYg2jc6QskR9PpPqPfyY1QBP5Lt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgQPpN8AtEtU51AS4F68tBjvYy4o8NGXpdJCgLHU6haaMa7kYTb9oDmYYgrhBgFf9vDGWej4xshH9dEqaN3AVBr",
  "key1": "em8oFT9jBN63kjXEmFrJiMH7qNYcoKqVHzjoxDBrFbPEriMTYKUycNGLLjyzmjjtF3rhRoyh5XXEFSJAVQgybuu",
  "key2": "2FYcPCMRjKorBtj2acDiLAYuGP3STnzzbJb7HHhKyyhwBj46rQrQis2YSV5ES1FHbpYPYGqZAB3xWS1ox4TVMQFm",
  "key3": "5bZwG8Y4g2iMc7DEqBE8bLZPnZgE939ALMs9GyzopzkHt2pb8vvTBj718WwfFcsdYgkiuMsmNQ7KZ6hMBfeC5LFW",
  "key4": "zMrwPE4JXZRqkV2qyYRUQiSTWFxjcsArpb3ceyzNXTPEFbymsmVogSFsVJFeJnDdE1Vh2jRdpoWJyyTsWDZPrdU",
  "key5": "2n2qYvKVtHHTL7odfHat298iNpiAbzy431XfiB1ao6fn9U3MWVmfyCFzFVFH9e5kz16wF1z8gW4V39q22f9nRYYB",
  "key6": "2676iS41LqgkyYqvdgczJcqXUwBjLFw4Z8CEnhzAaa8WEZVctzti21jGQqbFyYrRHYV7c5JqFQ5FMvx9qpg8gDcM",
  "key7": "5oyb8R3qBa9b74zRHnCiR7Y7fpKjHitceNaRzdNUgoRhkRcw3LRyoUoTjsmSFJu39rdD1WbhmwWJtgm4qF7Cd3wZ",
  "key8": "2DazJMoKpeCYQ21Jr6UkECzhEmfhhKbtVBBFby2UiNhDUQucjaF1qkrhYEJVXNqjbYw8wsDj3BdGnd4DE5AyWvAV",
  "key9": "5v2P1PpexdYDBXPe9oVHSvUGZMHDA6D5pPRR327inXz18rTnAseWGTGR183JPtX9BRxqoWbPYZmR6yMcszFNRt3a",
  "key10": "612GtTDUwKtgHUizdsvVhUb7sdjgiEb1hpEvp1JXi638HmjwhLP1dXmjt42wdGuKrq9PB3BCfouC3mZ7BYJRX1DG",
  "key11": "5rCRTUop5W8qKyobt6izTq5ULdrHK22dtkLM9xHhWhcfWZrrQFFcaNdNxtBj9Ruxy42ALJt4coWxK1vzqtqZ2AkK",
  "key12": "3vrfhuySqJc67aUBZjKcr3dhMd6sKZ8obHcfkHXkmmWWiMzERJhuXHaf6TbiNg1Ae5KidND3oHLU4XsumM6Pjk1x",
  "key13": "47opTC9wWErkXgQfrFgTp6ka1BjN8rsFyJM4Q7hg7Qfi2ds4W4wikNRsmRLgTHSGwF5vWom3S3wi2wL5g51VC9Xs",
  "key14": "32G5tN2FwLxEwcdTLRNq4hoEtS5RAHJWjoFC7zPtxXd1TuyPffK39nRsycU6yZGRCKWR5XJx7ii7F1k1ym2s5VPU",
  "key15": "7dt9vxBdFvA7zrpGoSvPWGZDYiiuHRHwFRfBB2AgxUcsz4JDGtYUh4hB4aEWgMsMRjLQ3qAD9DtH2Cq5SVbHACf",
  "key16": "4c4HspyN3TzEAp72Ex7vqNjXk4uavvhWKP3KwLtChJ3P3jMdZdqKpwUUNBseUHe99XicKNrHVY4h6vWswHSuaRDX",
  "key17": "49s68i4qhsdYSCi4xQVYwRrjqwH7fuvcJcFQ8GBS597A8rRPAz7V65sNCoTXnpdjBeiapuBrXfEpXDTLFu4vctn6",
  "key18": "4DjjCGpRu535THqr7a1rsk38JNxowz5PFiPNQSyMAUboeQ3s9nY1gYYVBHKBh9L4mwqMGGPUtkhg5AHFD9x8RYwM",
  "key19": "5o3NTPAkyaNFcTWRAs56VSzdqp16zu4wjVd3Z8zYgLbpdHMdaaqqMHD8rYNzBQo9QaRACKrEHbHgef2DMBpSqGEn",
  "key20": "2KmT4UjYKnck3ZEqHt7VP3Q2XBtmNDFCiZWgw8v22G2vhzVe8LURNAE76Fma2J3tThr316EVmTpU8pMkP5Jqt51m",
  "key21": "42PQH4zpU5Vum7jLL64oGu9MbQKuarmeNNCsigL2vWPT2Njf2RzbDeTM5KnVZ8P9cswbVJgSTguvbSuzhDEmTanE",
  "key22": "5H2Zuk48MrudAc8KX3yRQPXKt6nnxi5ZVy6uMetA8BBSPWqcjBAhSKhrLJh89oBof3s8tuhyrr7aunTSfduffkP5",
  "key23": "3Tj4oQPLkLUrS73PHto9ABYCbXHa3uhyeMDTnu1TiD6KG6iTA5HsCkRxzvJPEDDZvNpHywKkjWPBTEMNmsL5ZBJ8",
  "key24": "4bUxuxArFuyAhJoiU339Gbf9G4Rp3VsgUHMS45KUjjjDi1gpeANi3McjKAcH9soRKnN5Px9xYGvEHnYzzH3R6MTB",
  "key25": "a4KCdHxGLnquPzeGtoLqtjhUTMqAAWbMVRwJCXFJGDJKTV6Pe2g4TC7F5WhcNgdvgh6McehztoNuFsM4o5oojHs",
  "key26": "mHoYrfUvZkaywGFWpSvB4XMXpbVNrMFqsa7kyM2RZBcbVa6YYy22RzMTzogN5u8bi1WVLbYkbb2tPa5sVtCFAWw",
  "key27": "3puG65CzsZH6363HQwe3CE5oE6bi5Xu6J6C2wjdC9jRyqnt7guDMvCbxe7FuGkorP4Db5SWiMdJ1rPkHU71ZSmiM",
  "key28": "4dCquguVxDsQLJeNL2czzQNHabXYBSYmHQvMKTufomsktPdbnnyoozPzmg1Vb7RHNhn1AB6jTpX2sJGZRaL6ocmB",
  "key29": "Rdw3zY5r9CFo3JLQVKoumwkJ2J7Hxoo2oR9tNhuJ1K4CVo6xaYPicJH8zjwL1EULWDXu9NhrYZohKbgt3GVn6h4",
  "key30": "54XQesChtRJS88XbkNX7bbhPyvzHz7ty5kVXJgXgeFP8uDVBaFTQonfN26GNwWnBRDq8LWQ5pTG469ps7tqPMGAt",
  "key31": "4HSNYhz1hPa1AJcURXb883bHGgXgkchGuy3HfHwzQReqgGULY2VfQndKQxoNdbRhfpJycndJw1PRuuwcGAp5v3MU",
  "key32": "3aridWmuMs6hq9dswxBsann6osAmRMdLYgXfyobij61faHPjumgG4CbHM8j58wxqAcjKcvUPpRXS8QRhz8JtRiom",
  "key33": "2Phkk2M9JsAmSujrQGuYNoKp6eXwZYXoYr5SBg5Wu8HCWs4g9Yq8eyUVFYMGSVtm5RM1sMyFMW5YhJj7JdGGbZU8"
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
